import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {createReduxStore} from "../../srore/store";

export const renderWithRedux = (component, preloadedState) => {
    const store = createReduxStore(preloadedState);
    return render(
        <Provider store={store}>
            {component}
        </Provider>
    );
};