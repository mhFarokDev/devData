class Alert{
    static success(containt){
        return `<p class="alert alert-success d-flex justify-content-between">${containt}  <button class="btn-close" data-bs-dismiss="alert"></button></p>`
    }
    static danger(containt){
        return `<p class="alert alert-danger d-flex justify-content-between">${containt}  <button class="btn-close" data-bs-dismiss="alert"></button></p>`
    }
}
export default Alert;