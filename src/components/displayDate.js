function DisplayDate(){
    const d = new Date();
    const day = d.getDay();
    console.log(day);
    return(
    <div>
        Today is {
            day === 0 ? ' Sunday':
            day === 1 ? ' Monday' :
            day === 2 ? ' Tuesday' :
            day === 3 ? ' Wednesday' :
            day === 4 ? ' Thursday' :
            day === 5 ? ' Friday' :
            day === 6 ? ' Saturday' :
             //everything before ? if statement, everything after is wgat to do if true, and after : is else
            ''
        }  
    </div>

    )
}

export default DisplayDate;

