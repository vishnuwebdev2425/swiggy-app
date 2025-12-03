const Contact=()=>{
    return(
        <div>
            <h1>Provided By Vishnu Private Limited</h1>
            <h1>Connected Trough</h1>
            <ul>
                <li>Linkdln</li>
                <li>Whatsapp</li>
                <li>Facebook</li>
                <li>X</li>
            </ul>
            <div>
                <div>
                    <label htmlFor="name"></label>
                    <input type="text" placeholder="Enter the name" id="name"/>
                    <label htmlFor="sname"></label>
                    <input type="text" placeholder="enetr the second name" id="sname"/>
                    <button className="p-2 m-2 bg-grey rounded-2xl cursor-pointer hover:bg-black hover:text-white hover:font-bold">Submit</button>


                </div>
            </div>
        </div>
    )
}
export default Contact