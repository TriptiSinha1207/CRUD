let data=[
    {id: 1,name:"Tripti",email:"tripti@gmail.com"},
    {id: 2,name:"Ashi",email:"ashi@gmail.com"}
]

function readAll(){
    var tbdata= document.querySelector(".table_data");
    var elements= "";
    data.map(d => (
        elements += <tr>
            <td>${d.name}</td>
            <td>${d.email}</td>
            <td>
                <button onclick={edit(${d.id})}>Update</button>
                <button onclick={delet(${d.id})}>Delete</button>
            </td>
        </tr>
    ))
    tbdata.innerHTML =elements;
}
function createForm(){
    document.querySelector(".create_form").computedStyleMap.display="block";
    document.querySelector(".create_form").computedStyleMap.display="none";
}
function add(){
    var name = document.querySelector(".name").value ;
    var email= document.querySelector(".email").value ;
    var newObj = {id: 3,name,email};
    data.push(newObj);
    document.querySelector(".create_form").computedStyleMap.display="none";
    document.querySelector(".addbtn").computedStyleMap.display="block";
    readAll();
}
function edit(id){
    document.querySelector(".update_form").computedStyleMap.display="block";
    document.querySelector(".addbtn").computedStyleMap.display="none";
    var updateObj = data.find(f =>f.id === id);
    document.querySelector(".update_id").value =updateObj.id;
    document.querySelector(" uname").value =updateObj.name;
    document.querySelector(" uemail").value =updateObj.email;
}
function update(){
    var id =parseInt(document.querySelector(".update_id").value);
    var name= document.querySelector(".uname").value;
    var email=document.querySelector(".uemail").value;
    var updateObj={id,name,email};
    var index= data.findIndex(f => f.id === id);
    data[index] = updateObj;
    document.querySelector(".update_form").computedStyleMap.display="none";
    document.querySelector(".addbtn").computedStyleMap.display="block";
    readAll();

}
function delet(id){
    var newdata = data.filter(f => f.id !== id);
    data = newdata;
    readAll();
}

