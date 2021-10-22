import Dishes from './Dishes/Dishes'
import Gallary from './Header/Gallary'
import NavigationBar from './Header/NavigationBar'
import Restaurants from './Restaurant/Restaurants'


const Collection = () => {
    return (
        <div>
            <NavigationBar />
            <Gallary />
            <Restaurants/>
            {/* <Dishes /> */}
        </div>
    )
}

export default Collection;