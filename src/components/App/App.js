import React, { useState, useEffect } from "react";

import "./App.css";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Preloader from "../Preloader/Preloader";
import Profile from "../Profile/Profile";
import PopupLogin from "../PopupLogin/PopupLogin";
import PopupRegister from "../PopupRegister/PopupRegister";
import PopupItem from "../PopupItem/PopupItem";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import SearchForm from "../SearchForm/SearchForm";
import ErrorPage from "../ErrorPage/ErrorPage";
import { getRecipe } from "../../utils/recipeApi";
import { Switch, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { CurrentPopup } from "../../contexts/CurrentPopupContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { CurrentSearchCards } from "../../contexts/CurrentSearchCards";
import { SelectedCardContext } from "../../contexts/SelectedCardContext";

import {
  register,
  storeItem,
  checkToken,
  saveItem,
  unsaveItem,
  getUserRecipes,
} from "../../utils/databaseApi";

import { errors } from "../../utils/const";

function App() {
  const [activePopup, setActivePopup] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "Cassandra G",
  });
  const [currentSearchCards, setCurrentSearchCards] = useState([]);
  const [displayedCards, setDisplayedCards] = useState([]);
  const [initialCardIndex, setInitialCardIndex] = useState(3);
  const [selectedCard, setSelectedCard] = useState({});
  const [searchActive, setSearchActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchSuccessful, setSearchSuccessful] = useState(false);
  const [userCards, setUserCards] = useState([]);

  const history = useHistory();

  const handleOpenLogin = () => {
    setActivePopup("login");
  };

  const handleOpenRegister = () => {
    setActivePopup("register");
  };

  const handleCardPreview = (card) => {
    setActivePopup("preview");
    setSelectedCard(card);
  };

  const handleClosePopup = () => {
    setActivePopup("");
  };

  const handleClickOutsideClose = (evt) => {
    if (evt.target.classList.contains("popup")) {
      handleClosePopup();
    }
  };

  const handleRecipeSearch = (query) => {
    let encodedQuery = encodeURIComponent(query);
    setIsLoading(true);
    getRecipe(encodedQuery)
      .then((data) => {
        handleStoreRecipeCards(data.results);
        setCurrentSearchCards(data.results);
        setSearchActive(true);
        setSearchSuccessful(data.results.length > 0);
      })
      .catch((err) => {
        console.log(err);
        history.push("/500");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleStoreRecipeCards = (cards) => {
    cards.forEach((card) => {
      const { title, image, id, summary, sourceName, analyzedInstructions } =
        card;

      storeItem({ title, image, id, summary, sourceName, analyzedInstructions })
        .then((data) => {
          return data;
        })
        .catch(console.error);
    });
  };

  const handleSetUserCards = () => {
    getUserRecipes().then((recipes) => {
      if (!recipes) {
        return;
      }
      setUserCards(recipes);
    });
  };

  const handleSaveRecipeCard = (id) => {
    saveItem(id)
      .then(() => {
        handleSetUserCards();
      })
      .catch(console.error);
  };

  const handleRemoveRecipeCard = (id) => {
    unsaveItem(id)
      .then(() => {
        handleSetUserCards();
        handleClosePopup();
      })
      .catch(console.error);
  };

  const handleRegister = ({ email, password, name }) => {
    register({ email, password, name })
      .then(() => {
        setActivePopup("login");
      })
      .catch(console.error);
  };

  const handleLogin = () => {
    handleCheckToken();
    handleClosePopup();
    handleSetUserCards();
    history.push("/profile");
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setCurrentUser({});
    history.push("/");
  };

  const handleCheckToken = () => {
    if (localStorage.getItem("token")) {
      const jwt = localStorage.getItem("token");

      checkToken(jwt)
        .then((data) => {
          setCurrentUser(data.data);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      handleSetUserCards();
    }
  }, []);

  useEffect(() => {
    handleCheckToken();
  }, []);

  const handleShowMore = (e) => {
    e.preventDefault();
    const newCards = currentSearchCards.slice(0, initialCardIndex + 3);
    setDisplayedCards(newCards);
    setInitialCardIndex(initialCardIndex + 3);
  };

  useEffect(() => {
    setDisplayedCards(currentSearchCards.slice(0, 3));
  }, [currentSearchCards]);

  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleClosePopup();
      }
    };
    window.addEventListener("keydown", handleEscClose);
    return () => window.removeEventListener("keydown", handleEscClose);
  }, []);

  return (
    <div className="App" onClick={handleClickOutsideClose}>
      <SelectedCardContext.Provider
        value={{
          handleCardPreview,
          selectedCard,
          handleSaveRecipeCard,
          handleRemoveRecipeCard,
        }}
      >
        <CurrentSearchCards.Provider
          value={{
            displayedCards,
            searchActive,
            searchSuccessful,
            currentSearchCards,
            initialCardIndex,
          }}
        >
          <CurrentUserContext.Provider
            value={{ isLoggedIn, currentUser, userCards }}
          >
            <CurrentPopup.Provider value={{ activePopup, setActivePopup }}>
              <Switch>
                <Route path="/500">
                  <Header
                    onClickLogin={handleOpenLogin}
                    onClickSignUp={handleOpenRegister}
                    handleSignOut={handleSignOut}
                  >
                    <ErrorPage error={errors.server}></ErrorPage>
                  </Header>
                </Route>
                <Route path="/403">
                  <Header
                    onClickLogin={handleOpenLogin}
                    onClickSignUp={handleOpenRegister}
                    handleSignOut={handleSignOut}
                  >
                    <ErrorPage error={errors.forbidden}></ErrorPage>
                  </Header>
                </Route>
                <Route path="/404">
                  <Header
                    onClickLogin={handleOpenLogin}
                    onClickSignUp={handleOpenRegister}
                    handleSignOut={handleSignOut}
                  >
                    <ErrorPage error={errors.notFound}></ErrorPage>
                  </Header>
                </Route>

                <ProtectedRoute path="/profile">
                  <ProfileHeader handleSignOut={handleSignOut} />
                  <Profile />
                </ProtectedRoute>

                <Route path="/">
                  <Header
                    onClickLogin={handleOpenLogin}
                    onClickSignUp={handleOpenRegister}
                    handleSignOut={handleSignOut}
                  >
                    <h1 className="header__header">What's cooking?</h1>
                    <SearchForm handleRecipeSearch={handleRecipeSearch} />
                  </Header>
                  <Main handleShowMore={handleShowMore} />
                </Route>
              </Switch>

              <Footer />
              {activePopup === "login" && (
                <PopupLogin
                  onClose={handleClosePopup}
                  buttonText="login"
                  handleLogin={handleLogin}
                />
              )}

              {activePopup === "register" && (
                <PopupRegister
                  onClose={handleClosePopup}
                  buttonText="Sign Up"
                  handleRegister={handleRegister}
                />
              )}
              {activePopup === "preview" && (
                <PopupItem onClose={handleClosePopup} />
              )}

              {isLoading && <Preloader />}
            </CurrentPopup.Provider>
          </CurrentUserContext.Provider>
        </CurrentSearchCards.Provider>
      </SelectedCardContext.Provider>
    </div>
  );
}

export default App;
