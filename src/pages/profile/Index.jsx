import { useNavigate } from "react-router-dom";
import Style from "./Style.module.css";

export function Profile() {
    var cookies = document.cookie
        .split(";")
        .map((cookie) => cookie.split("="))
        .reduce(
            (accumulator, [key, value]) => ({
                ...accumulator,
                [key.trim()]: decodeURIComponent(value),
            }),
            {}
        );

    // useLocation, useNavigate and states
    const navigate = useNavigate();

    // logs out the user
    const handleLogout = async () => {
        document.cookie = `logged=false`;

        navigate("/");
    };

    return (
        <div className={Style.profile}>
            <div className={Style.userinfo_container}>
                <div className={Style.profile_container}>
                    <div className={Style.profile_img_container}>
                        <img src={"/assets/images/" + cookies?.user_image} />
                    </div>
                    <p>{cookies?.username}</p>
                    <p>{cookies?.email}</p>
                </div>
                <div className={Style.buttons_container}>
                    <button
                        onClick={handleLogout}
                        className={Style.black_button}
                    >
                        Logout
                    </button>
                    <button onClick={() => navigate("/join")}>Close</button>
                </div>
            </div>
        </div>
    );
}
