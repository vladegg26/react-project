import {useState} from 'react';
import Luke from '../public/Luke.png'


function Photo() {
    const [color, setColor] = useState('grey');
    const [h, setH] = useState(150);

    return (
        <>
            <button onClick={() => setColor('red')}>red</button>
            <button onClick={() => setColor('grey')}>grey</button>
            <button onClick={() => setH(200)}>200px</button>
            <button onClick={() => setH(150)}>150px</button>
            <div>{color + ', height: ' + h}</div>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                backgroundColor: "#3f3f3f",
                height: h + '%'
            }}>

                <div style={{
                    backgroundImage: 'url(' + Luke + ')',
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 50% top 8px",

                    height: 100,
                    width: 150,
                    backgroundColor: "white",
                    borderRadius: 10,

                }}>

                    <div style={{
                        backgroundColor: color,
                        display: "flex",
                        justifyContent: "center",
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10
                    }}>
                        Luke Skywalker
                    </div>
                </div>
                <div style={{
                    height: 100,
                    width: 150,
                    backgroundColor: "white",
                    borderRadius: 10
                }}>
                    <div style={{
                        backgroundColor: "grey",
                        display: "flex",
                        justifyContent: "center",
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10
                    }}>
                        №2
                    </div>
                </div>
                <div style={{
                    height: 100,
                    width: 150,
                    backgroundColor: "white",
                    borderRadius: 10
                }}>
                    <div style={{
                        backgroundColor: "grey",
                        display: "flex",
                        justifyContent: "center",
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10
                    }}>
                        №3
                    </div>
                </div>
                <div style={{
                    height: 100,
                    width: 150,
                    backgroundColor: "white",
                    borderRadius: 10
                }}>
                    <div style={{
                        backgroundColor: "grey",
                        display: "flex",
                        justifyContent: "center",
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10
                    }}>
                        №4
                    </div>
                </div>

            </div>
        </>
    );
}

export default Photo