import {createReduxStore} from "../../store/store";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import AppRouter from "../../router/AppRouter";
import {MemoryRouter} from "react-router-dom";

export const renderTestApp = (
    component,
    {
        initialState,
        initialRoute = '/'
    } = {}
) => {
    const store = createReduxStore(initialState);

    return render(
        <Provider store={store}>
            <MemoryRouter initialEntries={[initialRoute]}>
                <AppRouter />
                {component}
            </MemoryRouter>
        </Provider>
    );
};