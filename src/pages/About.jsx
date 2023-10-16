import {Link} from '../Link.jsx';

const i18n={
  es:{
    title:"Sobre nosotros",
    button:"Ir a la home",
    description:"Hola, me llamo Miguel Angel Dura y estoy creando un clon de React Router"
  },
  en:{
    title:"About us",
    button:"Go to home page",
    description:"Hi, my name is Miguel Angel and I am creating a clone of React Router"
  }
}

const useI18n=(lang)=>{
  return i18n[lang]||i18n.en;
}

export default function AboutPage({routeParams}){
  const i18n=useI18n(routeParams.lang?"es")
    return(
      <>
        <h1>{i18n.title}</h1>
        <div>
          <img src="https://pbs.twimg.com/profile_images/1613612257015128065/oA0Is67J_400x400.jpg" alt="Foto de midudev" />
        </div>
        <p>{i18n.description}</p>
        <Link to='/'>{i18n.button}</Link>
      </>
    )
  }