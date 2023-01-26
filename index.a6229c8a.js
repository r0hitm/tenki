const API_KEY="f0c5c05c6f612287042904ba9e1d65a5",WEATHER_API="https://api.openweathermap.org/data/2.5/weather",GEOCODE_API="https://api.openweathermap.org/geo/1.0/direct",WEATHER_ICON_API="https://openweathermap.org/img/wn",weatherData={city:"",lat:0,lon:0,desc:"",iconCode:"",temp:0,tempUnit:"C",wind:0,windUnit:"m/s",pressure:0,pressureUnit:"hPa",humidity:0,toMetric:function(){this.temp=(this.temp-32)/1.8,this.temp=Math.round(100*(this.temp+Number.EPSILON))/100,this.tempUnit="C",this.wind=this.wind/2.237,this.wind=Math.round(100*(this.wind+Number.EPSILON))/100,this.windUnit="m/s"},toImperial:function(){this.temp=1.8*this.temp+32,this.temp=Math.round(100*(this.temp+Number.EPSILON))/100,this.tempUnit="F",this.wind=2.237*this.wind,this.wind=Math.round(100*(this.wind+Number.EPSILON))/100,this.windUnit="mph"}},searchForm=document.getElementById("search"),city=document.getElementById("city"),wIcon=document.getElementById("w-desc-icon"),wDesc=document.getElementById("w-desc"),wTemp=document.getElementById("w-temp"),wTempC=document.getElementById("w-temp-unit-c"),wTempF=document.getElementById("w-temp-unit-f"),wHumidity=document.getElementById("w-humidity"),wWind=document.getElementById("w-wind"),wPressure=document.getElementById("w-pressure");async function fetchWeatherData(t){let e=`${GEOCODE_API}?q=${t}&limit=1&appid=${API_KEY}`,a=await fetch(e),n=await a.json();const{name:i,lat:s,lon:d}=n[0];e=`${WEATHER_API}?lat=${s}&lon=${d}&units=metric&appid=${API_KEY}`,a=await fetch(e),n=await a.json();const{weather:r,main:h,wind:m}=n;weatherData.city=i,weatherData.lat=s,weatherData.lon=d,weatherData.desc=r[0].main,weatherData.iconCode=r[0].icon,weatherData.temp=h.temp,weatherData.humidity=h.humidity,weatherData.wind=m.speed,weatherData.pressure=h.pressure}wTempC.addEventListener("click",(()=>{weatherData.toImperial(),wTempC.classList.add("hidden"),wTempF.classList.remove("hidden"),updateDOM()})),wTempF.addEventListener("click",(()=>{weatherData.toMetric(),wTempF.classList.add("hidden"),wTempC.classList.remove("hidden"),updateDOM()})),searchForm.addEventListener("submit",(async t=>{t.preventDefault();const e=searchForm.q.value;searchForm.reset();try{await fetchWeatherData(e)}catch(t){console.log(t)}console.log(weatherData),updateDOM()}));const updateDOM=t=>{city.textContent=weatherData.city,wDesc.textContent=weatherData.desc,wTemp.textContent=weatherData.temp,wHumidity.textContent=weatherData.humidity,wWind.textContent=weatherData.wind+" "+weatherData.windUnit,wPressure.textContent=weatherData.pressure+" "+weatherData.pressureUnit,wIcon.src=`https://openweathermap.org/img/wn/${weatherData.iconCode}.png`};(async t=>{await fetchWeatherData("New Delhi"),updateDOM()})();
//# sourceMappingURL=index.a6229c8a.js.map
