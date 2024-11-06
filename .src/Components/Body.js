const Body=()=>{
    return <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            {
                resList.map(restaurant=>
                    <RestaurantCard resData={restaurant}/>
                )
            }
            
            
        </div>
    </div>
}

export default Body;