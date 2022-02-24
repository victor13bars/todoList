import React from 'react';
import AppWithRedux from "../AppWithRedux";
import {ReduxStoreProviderDecorator} from "./decorators/ReduxStoreProviderDecorator";

export default {
    title: 'AppWithRedux  Stories',
    component: AppWithRedux,
    decorators: [ReduxStoreProviderDecorator]
}

export const EditableSpanBaseExample = (props: any) => {
    return (<AppWithRedux

    />)
}
