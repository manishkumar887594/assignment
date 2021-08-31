import logo from './logo.svg';
import './App.css';
import a from './img/1.png';
import b from './img/2.png';
import c from './img/3.png';
import d from './img/4.png';
import e from './img/5.png';
import f from './img/6.png';
import g from './img/7.jpg';
import h from './img/8.gif';
import i from './img/9.png';
function App() {
  return (
    <div className="App">
      <div style={{ width:'1000px', display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
    
<div class="sidebar" style={{ width:'5%' }} >
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAVFJREFUSEvVleExBEEQRt9FQAoiQATIgAgQASJABIgAESACZEAEyIAIqKd6qub2Zmen7N4P/eu2dqdf99dfz81YcsyWnJ8+wCpwBOwCG1HEC3APXAGfrYWVAAfABSCkFCY/AW5aIF2Aya/j4ANwCTzF8zZwBmzF8150VOXkACt+i8oPKxUKOQ2Z1obkygHpoJWrfS3syk7Oo6veb3OAQ1wHdjJZ+g4q1yPgmc1aJTngOz5stW7T92MBXxW3/db7V4mc0R3wDChX0wzSkF0mLdgyZPdBKzcBtOk7sBLO0CGlSIV8xJZXt7o70NS6ibWiyZTBUAr9nyQZtGh3Bqlat9m27aQUDtb3wrSpv2/7NKpddsexcO6G8RpXgwmVJe2N77yX3P6FaPV86Wx+b/VCxgBS0v2MvtDJWMAgZApAFzJ3E08FSBCtPfdHNCWg6NT/D/gBeOVFGZeTouUAAAAASUVORK5CYII="/>
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAL1JREFUSEvtlIEJwjAQRV836AY6ghtUJ9EROoJOoCO4ghvoBDqCbuAGlQ8JHGo9UhJUaKBw0Ob/+4+7VhQ+VWF9fs5gCmyBGaBa5wTM+0ikJJDgGaifxLIZ7IHlm06zGRyBJhgcgBVw94YkBVFnxDbA2hPX+68bCMMkdGo7Fi49cYpi/RLKS2C59xH5iCuHwcKkSU6wC0uli3GCVN+Aa1BrgUuORfvPKbLJxwTu4o+IXESDPvB+FYNE7aXiBg+0MykZNmDKCAAAAABJRU5ErkJggg=="/>
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAATlJREFUSEvtlO0xBEEURc9GgAyIABGQATIgAkSADIgAESACZCADZEAE1FmvVe9Uf0xR82/7z87WvLnnvdu3e8bEazaxPktA1+ExFq0Cx8AusAX4/wW4B66AjxalB1DwMURLOoofBazIaQHs+C7En4FL4Ck69t05sBOqQm5KhBZAGzaBW+CwYoOQs4BulOwqAezOj/x9B9Y7O+lUTnIRUy2UDwF2ep1VVEfPamzEfXLi7WEzOSAVWnManjYTkol9xbP7YLKEzVcOMHZ7tVE7NiWAZTZ1EIFYAPhiBVjrZbsCc6+cwP14APaHE6Qu/gpQT8hr7k5uUTMN3TvhpyABftOXAxzJg+Uy3+b/baRwEjeBhqVoURL2DPxnfcadNW+udtDya2AsTFuM50k+ee+yGyterVsCuhZObtE3R7A8GYJJQCwAAAAASUVORK5CYII="/>
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWpJREFUSEu9lc1NAzEQRl8qASoAKoASoALoADjSBD8VADc4AR2AxB2oAGiDC+hJnsh2HG8iZTPSKnLW+72Z8cx4wsg2GVmfRQDHwB6wkx59+kjPE/Dcc7IHOAAugc2BKL+BM0DYjM0DXAEnafcP4Polee3fRrMPnAIbaZ97BBXWAuTifuC6Z0KMVLtO0On+GmBaHtPb3czjoVowove06TBPVw0wn4Zce34PnANfHVJEosZW7MsBVssNYM7rg/0DfhPkogMJB6dR5IBb4KjhvXoCwt4SyN/aIoo7QIeLPrC2t4FW7nNAiBqJaTOysDgLtdQpACHSqqwWwO89EyEPGaTQycVGB6wyRZ8xVtZ6yNFkRR2n3K6kTNVaRaMVfbT2UWEU+bCzcRxgPVtq2IVQDjFtrl+rce0lpHiMlZlJWjda7aWHrnDM+3lRmHNBS104uZggH8eAo0Szzu0bRZvCIbDInTxwBP3XowP+ARuDahmwh9DnAAAAAElFTkSuQmCC"/>
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMlJREFUSEvtlVENwjAURc8UgANAAUgAJ6AACYADHIATkAAOwAEOIDdZl65p9kpKEz7az/XtnNvX5a2h8GoK80kR7IEj8ArCjIEtcBgKaQkE3wE3YOVJBL8Ai1aguuiyBAJdgbknEcjB78AycrpOZglUGEr0TMlNuAp9gZKcgGnmxT+ATXvynkAbk0y4e12sWXiCd7ub0rahHD2OD6sC17baIvNDri364xbphzIy86UVPN3QDKfp+QcDT/B1bJqmZfuyKndymrrigg999TEZp5UljwAAAABJRU5ErkJggg=="/>
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvlk+ENAUEQhb+rAB3QgQ7QgQ7oQFSADpSgA1SADqiADlABeclcwnK7e9wlJ/bPbi6773vzZi6h5JWUrM//APrACOhapFtgBmj3rpiIFsAgQ0WQqY8QAsj50gTGwMrOQ2Bi556vkhBAEXQAic8dp3IuyO4hupdiQoCbvWgAF+d1Ezjat0ydEMAXbx04A1dA57frG0Da/DWgXhUGkFs1XiMr99r3RQEkvgHaMeKC5o1Ik6Qf7mDO3cbnniL3gQRrQAs4hf7iTypIxza68uiL5rZ0QEwqT3cqV8HvR1R6D6oHuANyHiMZKBBnVAAAAABJRU5ErkJggg=="/>

</div>
<div>
  <p style={{color:"black",textAlign:'left'}}>Connect Autoresponder</p>
  <p style={{color:"black",textAlign:'left'}}>with the Autoresponder mentioned below, you can integrate.you can set behavioural guidelances in you products to add<br></br> customers to mailing list,tag them when they cancel their subscription, and a lot more.</p>
  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}>

    <div><div class="card" style={{width:'200px',height:'200px',background:'#f2f3f4', borderRadius:' 10px 10px 10px 10px'}} ><br></br>
  <img class="card-img-top" src={a} alt="Card image cap" height="50px"/>
  <div class="card-body">
    <h5 class="card-title">GetResponse</h5>
    <p class="card-text" style={{background:'white'}}>0 Account connected</p>
    <button style={{background:'#FF4200', borderRadius:' 8px 5px 5px 5px',height:"30px",fontcolor:'white'}}><p style={{color:'white',textAlign:'t'}}>Integrate now</p></button>
    <br></br></div>
</div></div>
    <div><div class="card" style={{width:'200px',height:'200px',background:'#f2f3f4', borderRadius:' 10px 10px 10px 10px'}} ><br></br>
  <img class="card-img-top" src={b} alt="Card image cap" height="50px"/>
  <div class="card-body">
    <h5 class="card-title">GetResponse</h5>
    <p class="card-text" style={{background:'white'}}>0 Account connected</p>
    <button style={{background:'#FF4200', borderRadius:' 8px 5px 5px 5px',height:"30px",fontcolor:'white'}}><p style={{color:'white'}}>Integrate now</p></button>
  </div>
</div></div>
    <div><div class="card" style={{width:'200px',height:'200px',background:'#f2f3f4', borderRadius:' 10px 10px 10px 10px'}} ><br></br>
  <img class="card-img-top" src={c} alt="Card image cap" height="50px"/>
  <div class="card-body">
    <h5 class="card-title">GetResponse</h5>
    <p class="card-text" style={{background:'white'}}>0 Account connected</p>
    <button style={{background:'#FF4200', borderRadius:' 8px 5px 5px 5px',height:"30px",fontcolor:'white'}}><p style={{color:'white'}}>Integrate now</p></button>
  </div>
</div></div>
    <div><div class="card" style={{width:'200px',height:'200px',background:'#f2f3f4', borderRadius:' 10px 10px 10px 10px'}} ><br></br>
  <img class="card-img-top" src={d} alt="Card image cap" height="50px"/>
  <div class="card-body">
    <h5 class="card-title">GetResponse</h5>
    <p class="card-text" style={{background:'white'}}>0 Account connected</p>
    <button style={{background:'#FF4200', borderRadius:' 8px 5px 5px 5px',height:"30px",fontcolor:'white'}}><p style={{color:'white'}}>Integrate now</p></button>
  </div>
</div></div>
  </div>
  <br></br><div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}>

<div><div class="card" style={{width:'200px',height:'200px',background:'#f2f3f4', borderRadius:' 10px 10px 10px 10px'}} ><br></br>
<img class="card-img-top" src={e} alt="Card image cap" height="50px"/>
<div class="card-body">
<h5 class="card-title">GetResponse</h5>
<p class="card-text" style={{background:'white'}}>0 Account connected</p>
<button style={{background:'#FF4200', borderRadius:' 8px 5px 5px 5px',height:"30px",fontcolor:'white'}}><p style={{color:'white'}}>Integrate now</p></button>
</div>
</div></div>
<div><div class="card" style={{width:'200px',height:'200px',background:'#f2f3f4', borderRadius:' 10px 10px 10px 10px'}} ><br></br>
<img class="card-img-top" src={f} alt="Card image cap" height="50px"/>
<div class="card-body">
<h5 class="card-title">GetResponse</h5>
<p class="card-text" style={{background:'white'}}>0 Account connected</p>
<button style={{background:'#FF4200', borderRadius:' 8px 5px 5px 5px',height:"30px",fontcolor:'white'}}><p style={{color:'white'}}>Integrate now</p></button>
</div>
</div></div>
<div><div class="card" style={{width:'200px',height:'200px',background:'#f2f3f4', borderRadius:' 10px 10px 10px 10px'}} ><br></br>
<img class="card-img-top" src={g} alt="Card image cap" height="50px"/>
<div class="card-body">
<h5 class="card-title">GetResponse</h5>
<p class="card-text" style={{background:'white'}}>0 Account connected</p>
<button style={{background:'#FF4200', borderRadius:' 8px 5px 5px 5px',height:"30px",fontcolor:'white'}}><p style={{color:'white'}}>Integrate now</p></button>
</div>
</div></div>
<div><div class="card" style={{width:'200px',height:'200px',background:'#f2f3f4', borderRadius:' 10px 10px 10px 10px'}} ><br></br>
<img class="card-img-top" src={h} alt="Card image cap" height="50px"/>
<div class="card-body">
<h5 class="card-title">GetResponse</h5>
<p class="card-text" style={{background:'white'}}>0 Account connected</p>
<button style={{background:'#FF4200', borderRadius:' 8px 5px 5px 5px',height:"30px",fontcolor:'white'}}><p style={{color:'white'}}>Integrate now</p></button>
</div>
</div></div>
</div>

<br></br>
<div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}>

<div><div class="card" style={{width:'200px',height:'200px',background:'#f2f3f4', borderRadius:' 10px 10px 10px 10px'}} >
<img class="card-img-top" src={b} alt="Card image cap" height="50px"/>
<div class="card-body">
<h5 class="card-title">GetResponse</h5>
<p class="card-text" style={{background:'white'}}>0 Account connected</p>
<button style={{background:'#FF4200', borderRadius:' 8px 5px 5px 5px',height:"30px",fontcolor:'white'}}><p style={{color:'white'}}>Integrate now</p></button>
</div>
</div></div>
<div><div class="card" style={{width:'200px',height:'200px',background:'#f2f3f4', borderRadius:' 10px 10px 10px 10px'}} >
<img class="card-img-top" src={b} alt="Card image cap" height="50px"/>
<div class="card-body">
<h5 class="card-title">GetResponse</h5>
<p class="card-text" style={{background:'white'}}>0 Account connected</p>
<button style={{background:'#FF4200', borderRadius:' 8px 5px 5px 5px',height:"30px",fontcolor:'white'}}><p style={{color:'white'}}>Integrate now</p></button>
</div>
</div></div>
<div><div class="card" style={{width:'200px',height:'200px',background:'#f2f3f4', borderRadius:' 10px 10px 10px 10px'}} >
<img class="card-img-top" src={b} alt="Card image cap" height="50px"/>
<div class="card-body">
<h5 class="card-title">GetResponse</h5>
<p class="card-text" style={{background:'white'}}>0 Account connected</p>
<button style={{background:'#FF4200', borderRadius:' 8px 5px 5px 5px',height:"30px",fontcolor:'white'}}><p style={{color:'white'}}>Integrate now</p></button>
</div>
</div></div>
<div><div class="card" style={{width:'200px',height:'200px',background:'#f2f3f4', borderRadius:' 10px 10px 10px 10px'}} >
<img class="card-img-top" src={b} alt="Card image cap" height="50px"/>
<div class="card-body">
<h5 class="card-title">GetResponse</h5>
<p class="card-text" style={{background:'white'}}>0 Account connected</p>
<button style={{background:'#FF4200', borderRadius:' 8px 5px 5px 5px',height:"30px",fontcolor:'white'}}><p style={{color:'white'}}>Integrate now</p></button>
</div>
</div></div>
</div>





</div>

  

</div>
    </div>
  );
}

export default App;
