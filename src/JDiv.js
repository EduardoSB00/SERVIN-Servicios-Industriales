import $ from 'jquery';

const JDiv = () => {

    function handleButton(){
        $("#jtest").slideToggle();

    }

    return ( 
        <div className="jdiv-comoponent">
            <div className="block bg-danger border border-success rounded-circle" style={{height: 100, width: 100, backgroundColor: "blue"}} id="jtest"></div>
            <button onClick={handleButton}>Click Me</button>
        </div>
     );
}
 
export default JDiv;