import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LogeoService {

  constructor(public http:HttpClient) { }

  login(nombre:string,pass:string):Observable<any>
  {

    //parte de enviar
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('nombre', nombre);
    body = body.set('password', pass);

    return this.http.post("https://lacomandanicomazzoconi.000webhostapp.com/public/login", body, {headers: myheader});
  

  }

  registro(nombre:string,pass:string,tipo:string):Observable<any>
  {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('nombre', nombre);
    body = body.set('password', pass);
    body = body.set('tipo', tipo);


    return this.http.post("https://lacomandanicomazzoconi.000webhostapp.com/public/usuario/", body, {headers: myheader}).pipe(res => res);
  
 
  }

  registroCliente(nombre:string,pass:string):Observable<any>
  {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('nombre', nombre);
    body = body.set('password', pass);


    return this.http.post("https://lacomandanicomazzoconi.000webhostapp.com/public/usuario/usuario", body, {headers: myheader}).pipe(res => res);
  
  }

  traerMesas(): Observable<any> 
  {
    return this.http.get('https://lacomandanicomazzoconi.000webhostapp.com/public/mesa/' + localStorage.getItem('token')).pipe(res => res);
  }

  traerUsuarios(token): Observable<any> 
  {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.get('https://lacomandanicomazzoconi.000webhostapp.com/public/usuario/traer/' + token,{headers:myheader}).pipe(res => res);
  }  

  traerPedidos(token): Observable<any>
  {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    
    return this.http.get('https://lacomandanicomazzoconi.000webhostapp.com/public/pedido/'+ token ,{headers:myheader}).pipe(res => res);
  
  }

  agregarMesa(estado:string, codigo:string, token:string):Observable<any>
  {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    //myheader.set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('estado', estado);
    body = body.set('codigo', codigo);
    body = body.set('token', token);



    let retorno;
   
    retorno = this.http.post("https://lacomandanicomazzoconi.000webhostapp.com/public/mesa/", body, {headers: myheader}).pipe(res => res);
    return retorno;
    

  }

  borrarMesa(id)
  {
    
  }

  agregarPedido(codigo:string,idMesa:string,tipoPedido:string,quePidio:string,precio:string,token:string):Observable<any>
  {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    //myheader.set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('codigo', codigo);
    body = body.set('idMesa', idMesa);
    body = body.set('tipoPedido', tipoPedido);
    body = body.set('quePidio', quePidio);
    body = body.set('precio', precio);

    body = body.set('token', token);

    

    let retorno;
   
    retorno = this.http.post("https://lacomandanicomazzoconi.000webhostapp.com/public/pedido/", body, {headers: myheader}).pipe(res => res);
    return retorno;
  }

  buscarPedido(codigoMesa:string, codigoPedido:string):Observable<any>
  {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    //myheader.set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('codigoMesa', codigoMesa);
    body = body.set('codigoPedido', codigoPedido);
    body = body.set('token', localStorage.getItem('token'));
    

    let retorno;
   
    retorno = this.http.post("https://lacomandanicomazzoconi.000webhostapp.com/public/pedido/traerUno/", body, {headers: myheader}).pipe(res => res);
    return retorno;
    

  }

  modificarPedidoSinCambios(codigoPedido:string, token:string,estado:string,tiempo:any,tipoPedido:string)
  {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    //myheader.set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('token', token);
    body = body.set('codigoPedido', codigoPedido);
    body = body.set('estado', estado);
    body = body.set('tiempo', tiempo);
    body = body.set('tipoPedido', tipoPedido);



    

    let retorno;
   
    retorno = this.http.post("https://lacomandanicomazzoconi.000webhostapp.com/public/pedido/"+ codigoPedido,
          body, {headers: myheader}).pipe(res => res);
    return retorno;
  }

  modificarMesa(estado,codigoMesa, token)
  {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    //myheader.set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('token', token);
    body = body.set('codigoMesa', codigoMesa);
    body = body.set('estado', estado);



    

    let retorno;
   
    retorno = this.http.post("https://lacomandanicomazzoconi.000webhostapp.com/public/mesa/modificar",
          body, {headers: myheader}).pipe(res => res);
    return retorno;
  }


  facturarPDF(token): Observable<any> 
  {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.get('https://lacomandanicomazzoconi.000webhostapp.com/public/facturas/listarVentasPDF/' + token,{headers:myheader}).pipe(res => res);
  }  

  facturaExcel(token):Observable<any>
  {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.get('https://lacomandanicomazzoconi.000webhostapp.com/public/facturas/listarVentasExcel/' + token,{headers:myheader}).pipe(res => res);

  }

  facturarMesa(token):Observable<any>
  {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.get('https://lacomandanicomazzoconi.000webhostapp.com/public/facturas/FacturarPDF/' + token,{headers:myheader}).pipe(res => res);

  }

  subirFoto(file, id){
    const myheader = new HttpHeaders();
    
    let body = new HttpParams();
    body = body.set('id', id);
    
    const formData = new FormData(); 
    formData.append('file', file, file.name); 
    formData.append('id', id); 
    
    return this.http.post("https://lacomandanicomazzoconi.000webhostapp.com/public/usuario/cambiarFoto/", formData, {headers: myheader});

  }

  traerLogsLogin(token)
  {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.get('https://lacomandanicomazzoconi.000webhostapp.com/public/logs/login/' + token,{headers:myheader}).pipe(res => res);

  }

  traerLogsxSector(token)
  {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.get('https://lacomandanicomazzoconi.000webhostapp.com/public/logs/OperacionesPorSector/' + token,{headers:myheader}).pipe(res => res);

  }

  traerLogsxSectorLista(token)
  {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.get('https://lacomandanicomazzoconi.000webhostapp.com/public/logs/OperacionesPorSectorListadas/' + token,{headers:myheader}).pipe(res => res);

  }

  traerLogsxPersona(token, id)
  {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    let body = new HttpParams();
    body = body.set('codigo', id);
    body = body.set('token', token);

    return this.http.post('https://lacomandanicomazzoconi.000webhostapp.com/public/logs/OperacionesPorPersona/', body,{headers:myheader}).pipe(res => res);

  }
}
