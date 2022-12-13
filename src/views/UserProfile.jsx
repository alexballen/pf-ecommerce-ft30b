import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../redux/actions";

const UserProfile = () => {

  const { loggedUser } = useSelector(state => state.user);
  const [userData, setUserData] = useState({
    firstName:loggedUser.firstName ? loggedUser.firstName: "",
    lastName:loggedUser.lastName ? loggedUser.lastName: "",
    username:loggedUser.username,
    photo: loggedUser.photo?.url ? loggedUser.photo.url: "",
    country:loggedUser.country ? loggedUser.country: "",
    address:loggedUser.address ? loggedUser.address: "",
    city:loggedUser.cityOfOrigin ? loggedUser.cityOfOrigin: "",
    state:loggedUser.state ? loggedUser.state: "",
    postalCode:loggedUser.postalCode ? loggedUser.postalCode: "",
    phone:loggedUser.phoneNumber ? loggedUser.phoneNumber: "",
  })
  const [userPreference, setUserPreference] = useState({
    newProducts:loggedUser?.preference?.newProducts ? loggedUser.preference.newProducts: false,
    offers:loggedUser?.preference?.offers ? loggedUser.preference.offers: false,
    favorites:loggedUser?.preference?.favorites ? loggedUser.preference.favorites: false
  })
  const [image, setImage] = useState("");


  const dispatch = useDispatch()

  const handleSubmit = ()=>{
   

  }

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "proyecto-final-animals");
    // setImageChosen(true);
    // setLoading(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/tawaynaskp/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setUserData({...userData, photo:file.secure_url});
    setImage(file.secure_url)
};

  const handleChange = (e)=>{
   e.preventDefault()
   setUserData({...userData , [e.target.name]: e.target.value })
  }

  const handleCheckbox = (e)=>{
    e.preventDefault()
    setUserPreference({...userPreference , [e.target.name]: e.target.value === true ? false : true})
   }


  return (
     
    <div className="w-full h-fit sm:pb-48 md:pb-4">
      <div className="bg-base-300 h-fit ">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="mt-10 sm:mt-0 ">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Información Personal</h3>
                  <p className="mt-1 text-sm text-gray-600">Edite su información Personal.</p>
                </div>
              </div>
              <div className="mt-5 md:col-span-2 md:mt-0">
                <form onSubmit={handleSubmit}>
                  <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                            Nombre
                          </label>
                          <input
                            placeholder={loggedUser.firstName}
                            value={userData.firstName}
                            onChange={handleChange}
                            type="text"
                            name="firstName"
                            id="firstName"
                            autoComplete="given-name"
                            className="outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                            Apellido
                          </label>
                          <input
                            placeholder={loggedUser.lastName}
                            value={userData.lastName}
                            onChange={handleChange}
                            type="text"
                            name="lastName"
                            id="lastName"
                            autoComplete="family-name"
                            className="outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label className="block text-sm font-medium text-gray-700">Foto</label>
                          <div className="mt-1 flex items-center">
                            <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                       
                              <img src={loggedUser?.photo?.url} alt="profilepicture" />
                              
                            </span>
                            <input
                              // className={style.seleccionarArchivo}
                              type="file"
                              name="file"
                              onChange={uploadImage}
                              draggable
                              style={{borderRadius: '50%', width: '7em', height:'7em', marginLeft:'38%', position: 'absolute', opacity:'0%'}}
                            />
                          
                            <img
                              // className={style.seleccionarArchivo}
                              src={userData.photo.url}
                              style={{ width: "7em", height:'7em', borderRadius: "50%", marginLeft:'45%', objectFit: 'cover' }}
                              alt="Usuario"
                            />

                            <button
                              type="button"
                              className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                              Cambiar
                            </button>
                          </div>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                            Username
                          </label>
                          <input
                            placeholder={loggedUser.username}
                            value={userData.username}
                            onChange={handleChange}
                            type="text"
                            name="username"
                            id="username"
                            autoComplete="username"
                            className="outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                            Teléfono
                          </label>
                          <input
                            placeholder={loggedUser.phoneNumber}
                            type="number"
                            value={userData.phone}
                            onChange={handleChange}
                            name="phone"
                            id="phone"
                            autoComplete="phone-number"
                            className="outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none"
                          />
                        </div>
                      </div>
                    </div>
                        
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Save
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>

          <div className="mt-10 sm:mt-0 ">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Dirección</h3>
                  <p className="mt-1 text-sm text-gray-600">Agregue direcciones donde donde podrá recibir sus compras.</p>
                </div>
              </div>


              <div className="mt-5 md:col-span-2 md:mt-0">
                <form onSubmit={handleSubmit}>
                  <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        

                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                            Pais
                          </label>
                          <select
                            value={userData.country}
                            onChange={handleChange}
                            type="text"
                            name="country"
                            id="country"
                            autoComplete="country-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>

                          </select>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                            Teléfono
                          </label>
                          <input
                            placeholder={loggedUser.phoneNumber}
                            type="number"
                            value={userData.phone}
                            onChange={handleChange}
                            name="phone"
                            id="phone"
                            autoComplete="phone-number"
                            className="outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none"
                          />
                        </div>

                        <div className="col-span-6">
                          <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                            Calle
                          </label>
                          <input
                            placeholder={loggedUser.address}
                            type="text"
                            value={userData.address}
                            onChange={handleChange}
                            name="address"
                            id="address"
                            autoComplete="street-address"
                            className="outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                            Ciudad
                          </label>
                          <input
                            placeholder={loggedUser.cityOfOrigin}
                            type="text"
                            value={userData.city}
                            onChange={handleChange}
                            name="city"
                            id="city"
                            autoComplete="city"
                            className="outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                            Estado / Provincia
                          </label>
                          <input
                            // placeholder={loggedUser.cityOfOrigin}
                            type="text"
                            value={userData.state}
                            onChange={handleChange}
                            name="state"
                            id="state"
                            autoComplete="address-level1"
                            className="outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                            ZIP / Código Postal
                          </label>
                          <input
                            // placeholder={loggedUser.cityOfOrigin}
                            type="text"
                            value={userData.postalCode}
                            onChange={handleChange}
                            name="postalCode"
                            id="codigoPostal"
                            autoComplete="postal-code"
                            className="outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        

          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>

          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Notificaciones</h3>
                  <p className="mt-1 text-sm text-gray-600">Decide que tipo de comunicaciones deseas recibir de nosotros.</p>
                </div>
              </div>
              <div className="mt-5 md:col-span-2 md:mt-0">
                <form onSubmit={handleSubmit} >
                  <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                      <fieldset>
                        <div className="mt-4 space-y-4">
                          <div className="flex items-start">
                            <div className="flex h-5 items-center">
                              <input
                                id="favorites"
                                name="favorites"
                                // checked={userPreference.favorites === true ? true : false}
                                value={userPreference.favorites}
                                onChange={handleChange}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="favorites" className="font-medium text-gray-700">
                                Favoritos
                              </label>
                              <p className="text-gray-500">Te notificaremos si alguno de tus productos favoritos esta disponible.</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex h-5 items-center">
                              <input
                                // checked={userPreference.newProducts === true ? true : false}
                                value={userPreference.newProducts}
                                onChange={handleChange}
                                id="newProducts"
                                name="newProducts"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="newProducts" className="font-medium text-gray-700">
                                Nuevos Productos
                              </label>
                              <p className="text-gray-500">Te notificaremos cuando hayan nuevos productos disponibles.</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex h-5 items-center">
                              <input
                                // checked={userPreference.offers === true ? true : false}
                                value={userPreference.offers}
                                onChange={handleChange}
                                id="offers"
                                name="offers"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="offers" className="font-medium text-gray-700">
                                Ofertas
                              </label>
                              <p className="text-gray-500">Te notificaremos cuando hayan descuentos y ofertas para ti.</p>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                      
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile;
