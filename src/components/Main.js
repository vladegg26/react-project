import StarWars from '../public/StarWars.png'

function Main() {
return (
    <>
         <div style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                backgroundColor: "#3f3f3f"
                }}>

            <div style={{
                backgroundImage: 'url(' + StarWars +')',
                backgroundSize: 'contain'
            }}>
            </div>    
          
        </div>
    Main page
    </>
)

}
export default Main