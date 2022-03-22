import Alert from "./src/Alert.js";
import Storage from "./src/Storage.js";

const addUserForm = document.getElementById('addUserForm');
const devsListShow = document.getElementById('devsListShow');
const showAlrt = document.querySelector('.showAlrt');

addUserForm.addEventListener('submit', function(e){
    e.preventDefault()

    let form_Data = new FormData(e.target)
    let data = Object.fromEntries(form_Data.entries())

    let {name, call, location, photo} = data;

    if (name == '' || call == '' || location == '') {
        showAlrt.innerHTML = Alert.danger('All Fields are required.');
    }else{
        Storage.set("allDevs", data)
        addUserForm.reset()
        showData()
        

    }



    console.log(location);

})


/* Show Data */

function showData() {

    let allDevs = Storage.get('allDevs');
    
    let dvList = '';
    allDevs.map((data, index)=>{
        let {name, call, location, Photo} = data;

        dvList += `
        <tr>
                            <td>${index+1}</td>
                            <td>${name}</td>
                            <td>${call}</td>
                            <td>${location}</td>
                            <td><img src="${Photo ? Photo : './photo/download.png'}" alt="" style="width: 50px; height: 50px; border-radius: 50%;"></td>
                            <td><i class="fa fa-eye btn btn-success" aria-hidden="true"></i> <i class="fa fa-edit btn btn-primary" aria-hidden="true"></i> <i class="fa fa-trash btn btn-danger" aria-hidden="true"></i></td>
                            </tr>
        `
    })

    devsListShow.innerHTML = dvList;

    
}
showData()


