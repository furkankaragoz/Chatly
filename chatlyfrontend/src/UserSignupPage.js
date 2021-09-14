import React from "react"; // Must be all  react  component. 

class UserSignupPage extends React.Component {
   
    render() {
      return(
          <form> 
            <h1>Sign Up</h1>
            <div>
                <label>Username</label>
                <input></input>
            </div>
            <div>
                <label>Display Name</label>
                <input></input> 
            </div>
            <div>
                <label>Password</label>
                <input type="password"></input>
            </div>
            <div>
                <label>Password Repeat</label>
                <input type="password"></input>
            </div>
            <button>Sign Up</button>
          </form>
      );
    }
}

export default UserSignupPage;


// form avantajı mause ile değil enter ile de çalışması.



// Bu oluşturduğumuz .js uzantılı sınıf node module diye de geçiyor.
// Bu node module'ü index.js de kullanabilmemiz için aynı App.js gibi export default diye bir satır var.
// Her node module'ünün default ya da en azından bir tane fonksiyonu,class ı export etmesi bekleniyor.

// Bu yüzden "export default UserSignupPage;" yazdık class dışına. Direk classın başına export da yazabilirdik.
// Daha sonra index.js'e geliyoruz. "import UserSignupPage from './UserSignupPage';" bu şekilde ekliyoruz oraya.
// Daha sonra index.js de RenderDOM.render içerisindeki <App 'i <UserSignupPage/> yapıyoruz (strict mode içerisindekini)



 // Bu class'ın mutlaka overwrite edeceği method render methodu.
    // Her class componentin mutlaka render methodu olması gerekiyor ve bu renderın bir jsx dönmesi gerekiyor.
    // Burası signup page olacağı için kullanıcı bilgilerini tutmamız gerekiyor.Bu bilgileri tutmak için class 
    // component kullanmak gerekiyor.
    // Reactda 2 tip component bulunuyor.Biri App.js de olduğu gibi functional component.Diğeri de bu şu an yaptığımız 
    // gibi class component.

    // Diğer bir isimlendirme de App.js de ki functional componentlara stateless component deniyor.İçerisinde durum bilgisi yok.
    // Class tipinde olanlar için de statefull deniyor.İçerisinde o componentin durumuan ilişkin bilgileri taşıyor.

    // 