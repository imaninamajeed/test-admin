// React Admin Imports
import polyglotI18nProvider from "ra-i18n-polyglot";
import {
  Admin,
  CustomRoutes,
  Resource,
  localStorageStore,
  useStore,
  StoreContextProvider,
  ShowGuesser,
} from "react-admin";
import { Route } from "react-router";

// Local Imports
import { authProvider } from "./authProvider";
import categories from "./categories";

import { Layout } from "./Layout";
// import { Layout, Login } from "./layout";

import dataProviderFactory from "./dataProvider";
import englishMessages from "./i18n/en";
// import { Layout, Login } from "./layout";
import { Dashboard } from "./dashboard";
// import { Dashboard } from "./Dashboard";
// import { UserList } from "./users";
// import { PostList, PostEdit, PostCreate } from "./posts";
// import categories from "./categories";
import invoices from "./invoices";
import orders from "./orders";
import products from "./products";
import reviews from "./reviews";
import Segments from "./segments/Segments";
import visitors from "./visitors";

// import { themes, ThemeName } from "./themes/themes";
// import PostIcon from "@mui/icons-material/Book";
// import UserIcon from "@mui/icons-material/Group";

const i18nProvider = polyglotI18nProvider(
  (locale) => {
    if (locale === "my") {
      return import("./i18n/my").then((messages) => messages.default);
    }

    if (locale === "fr") {
      return import("./i18n/fr").then((messages) => messages.default);
    }

    // Always fallback on english
    return englishMessages;
  },
  "en",
  [
    { locale: "en", name: "English" },
    { locale: "my", name: "Melayu" },
    { locale: "fr", name: "Français" },
  ]
);

const store = localStorageStore(undefined, "ECommerce");

export const App = () => {
  // {
  // const [themeName] = useStore<ThemeName>("themeName", "soft");
  //   const lightTheme = themes.find((theme) => theme.name === themeName)?.light;
  //   const darkTheme = themes.find((theme) => theme.name === themeName)?.dark;
  // };
  return (
    <Admin
      title=""
      // dataProvider={dataProvider}
      dataProvider={dataProviderFactory(
        process.env.REACT_APP_DATA_PROVIDER || ""
      )}
      authProvider={authProvider}
      dashboard={Dashboard}
      layout={Layout}
      i18nProvider={i18nProvider}
      disableTelemetry
      // lightTheme={lightTheme}
      // darkTheme={darkTheme}
      defaultTheme="light"
    >
      <CustomRoutes>
        <Route path="/segments" element={<Segments />} />
      </CustomRoutes>
      {/* <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
        icon={PostIcon}
      />
      <Resource
        name="users"
        list={UserList}
        show={ShowGuesser}
        icon={UserIcon}
      /> */}
      <Resource name="customers" {...visitors} />
      <Resource name="orders" {...orders} />
      <Resource name="invoices" {...invoices} />
      <Resource name="products" {...products} />
      <Resource name="categories" {...categories} />
      <Resource name="reviews" {...reviews} />
    </Admin>
  );
};

const AppWrapper = () => (
  <StoreContextProvider value={store}>
    <App />
  </StoreContextProvider>
);

export default AppWrapper;
