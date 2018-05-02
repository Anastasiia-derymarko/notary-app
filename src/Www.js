
const contracts = ["none","купівлі-продажу","дарування", "оренди","іпотеки"]; 
const objectId = ["none","квартири","житлового будинку"]; 

function Www (props){
 const contracts = props.contracts;  
 const objectId = props.objectId;

const contractsd = contracts.map((number) =>
<option key={number.toString()}>{number}</option>);
                                         
 const objectIdss = objectId.map((number) =>
             <option key={number.toString()}>{number}</option>);      
        
        function handleClick () {
           console.log('this is:');
        }
     return (
          <div>                         
            <label>
            Договір
            <select>{contractsd}</select>
            </label>
            <label>
            Об'єкт
            <select>{objectIdss}</select>
            </label>
            <input type="date" />
            <button onClick={handleClick}>Відправити</button>
          </div>                           
        );                            
};
