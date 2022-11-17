import '../styles/globals.css'
// import { store } from '../store/store'
// import { Provider } from 'react-redux'

import {wrapper} from "../store/store"
import { Provider, useDispatch } from 'react-redux';
import { uiActions } from '../store/slices/uiSlice';


export default function MyApp({ Component, ...rest }) {
  const {store, props} = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>

  )
}

export async function getStaticProps(){
  try {
    const data = await fetch(`https://raw.githubusercontent.com/javialcocer/test-json/main/data.json`);
    const json = await data.json();  
    const dispatch = useDispatch();
    dispatch(uiActions.setUiContent(json.es));

    return {
    props: {ui: json},
    }
  } catch (error) {
    return {
      props: {ui: "error"}
    }
  }

}


// import wrapper from "../store/store"

// function MyApp({ Component, pageProps }) {
//   return (
//     const {store, props} = wrapper.useWrappedStore(rest);
//     <Component {...pageProps} />

//   )
// }


// export default MyApp
