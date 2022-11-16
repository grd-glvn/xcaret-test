import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { uiActions } from "../../store/slices/uiSlice";


export default function thankYou({ui}) {
  const dispatch = useDispatch();
  const language = useSelector( state => state.ui.language );
  const content = useSelector( state => state.ui.content );

  useEffect(() => {
    dispatch(uiActions.setUiContent(ui[language]));

    return () => {
    }
  }, [language])

  if(Object.keys(content).length===0){
    return(
      <div>
        Loading...
      </div>
    )
  }
  
  return (
    <>
    <Navbar/>        
    {/* <Footer/> */}
    </>
  )
}

export async function getStaticProps(){
  try {
    const data = await fetch(`https://raw.githubusercontent.com/javialcocer/test-json/main/data.json`);
    const json = await data.json();  
    return {
    props: {ui: json},
    }
  } catch (error) {
    return {
      props: {ui: "error"}
    }
  }

}