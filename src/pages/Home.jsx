import {Link} from '../Link.jsx';

export default function HomePage(){
    return (
      <>
        <h1>Home</h1>
        <p>Esta es una pagina de ejemplo para crar un React Router desde cero</p>
        <Link to='/About'>Ir a Sobre nosotros</Link>
      </>
    )
  }