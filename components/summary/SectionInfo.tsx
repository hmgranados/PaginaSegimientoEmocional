import {useUserStore} from "../../hooks";
import {UserModel} from "../../models";
import './sectionInfo.css';

const SectionInfo = () => {
    const user = useUserStore((state: UserModel) => state);
    return (
        <section>
            <div>
                <h1 className="saludo">!Hola {user.email}!</h1>
                <h2 className="notificar">Hoy has estado</h2>
            </div>
        </section>
    )
}

export default SectionInfo;