import normalize from "emotion-normalize";
import { css, Global } from "@emotion/react";
import { PageLayout } from "pages/PageLayout";
import { router } from "pages/Routes";
import { RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "store";

export default function App() {
  return (
    <>
      <Global
        styles={css`
          ${normalize}
          h1, h2, h3, h4, h5, h6, input {
            margin: 0;
          }

          button,
          input {
            background: none;
            border: none;
            outline: none;
          }
        `}
      />
      <PageLayout>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </PageLayout>
    </>
  );
}
