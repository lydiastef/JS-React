import './List.css';

function List(props) {   //props contains item list
    const deleteItemFromList = key => { //<-- function defined. Put into work in line 11
        const newList = props.itemList.filter(item0bj => { // filters out the deleted items. Returns all other items in a new list
            return item0bj.key !== key;
        });
        props.updateItemList(newList);
    };
    return (
        <div>
            {props.itemList.map(item0bj => {  //map returns us a new array. Item0bj is each and every item in the item list
                return (
                    <div key={item0bj.key} className='Item'> 
                        <p>{item0bj.item}</p>  
                        <button onClick={() => deleteItemFromList(item0bj.key)}>x</button>
            
                    </div>
                );
            })}

        </div>

    );
}

// We must define every function and then put it into work somewhere else in the file
//Line 7: return item to the list below the input field

export default List;

