// Get signalr.d.ts.ts from https://github.com/borisyankov/DefinitelyTyped (or delete the reference)

//AUTOGENERATED DO NOT EDIT THIS FILE
////////////////////
// available hubs //
////////////////////
//#region available hubs

//import $ from 'jquery';
(<any>window).jQuery = require('jquery');
//(<any>window).$ = require('jquery');
//window.jQuery = $;
//declare var jQuery:any;
//declare var $ : JQueryStatic;
declare var $:any;
require('ms-signalr-client');

export class SignalRDM {

  /**
    * The hub implemented by SignalServ.Hubs.DonorHub
    */
  donorHub: DonorHub;
  connection: any;
  url: string;
  cookie: string;
  connected: boolean;

  constructor(url: string, cookie: string) {
    this.connection = $.hubConnection(url); this.url = url; this.cookie = cookie;
    this.connection.qs = { token: cookie };
    this.donorHub = new DonorHub(this.connection);
    //var p = this.connection.createHubProxy('xyz');
    this.connected = false;
    this.connection.start({ transport: ['webSockets', 'serverSentEvents', 'longPolling'] }) //jsonp: true
      .then(() => {  //NEW BABEL SINTAX NO NEED JQUERY DONE
        console.log('Now connected, connection ID=' + this.connection.id);
        this.connected = true;
      })
      .fail(function () { console.log('Could not connect'); });
  }
}
//#endregion available hubs

///////////////////////
// Service Contracts //
///////////////////////
//#region service contracts

//#region DonorHub hub

//declare class DonorHub {

/**
  * This property lets you send messages to the DonorHub hub.
  */
//    server : DonorHubServer;

/**
  * The functions on this property should be replaced if you want to receive messages from the DonorHub hub.
//    */
//   client : any;
//}

export class DonorHub {
  connection: any;
  proxy: any;
  constructor(conn: any) {
    this.connection = conn;
    this.proxy = this.connection.createHubProxy('DonorHub');
    this.proxy.on('xbroadcastMessage', (name, message) => {
      console.log(message);
    });
  }
  client: any;


  /** 
    * Sends a "send" message to the DonorHub hub.
    * Contract Documentation: ---
    * @param name {string} 
    * @param message {string} 
    * @return {JQueryPromise of void}
    */
  send(name: string, message: string): Promise<void> {

    this.proxy.invoke('send', name, message); return;

  }

  /** 
    * Sends a "getAll" message to the DonorHub hub.
    * Contract Documentation: ---
    * @return {JQueryPromise of Person[]}
    */
  getAll(): Promise<Person[]> {

    return this.proxy.invoke('getAll');

  }

  /** 
    * Sends a "findPerson" message to the DonorHub hub.
    * Contract Documentation: ---
    * @param name {string} 
    * @return {JQueryPromise of Person[]}
    */
  findPerson(name: string): Promise<Person[]> {

    return this.proxy.invoke('findPerson', name);

  }

  /** 
    * Sends a "insertPerson" message to the DonorHub hub.
    * Contract Documentation: ---
    * @param pers {Person} 
    * @return {JQueryPromise of number}
    */
  insertPerson(pers: Person): Promise<number> {

    return this.proxy.invoke('insertPerson', pers);

  }

  /** 
    * Sends a "getimage" message to the DonorHub hub.
    * Contract Documentation: ---
    * @return {JQueryPromise of ImageMessage}
    */
  getimage(): Promise<ImageMessage> {

    return this.proxy.invoke('getimage');

  }

  /** 
    * Sends a "heeilou" message to the DonorHub hub.
    * Contract Documentation: ---
    * @param howmouch {number} 
    * @return {JQueryPromise of number}
    */
  heeilou(howmouch: number): Promise<number> {

    return this.proxy.invoke('heeilou', howmouch);

  }
}

//#endregion DonorHub hub

//#endregion service contracts



////////////////////
// Data Contracts //
////////////////////
//#region data contracts


/**
  * Data contract for SignalDomain.ImageMessage
  */
export class ImageMessage {
  Data: Byte[];
  FileName: string;
}


/**
  * Data contract for System.Byte
  */
export class Byte {
}


/**
  * Data contract for SignalDomain.Person
  */
export class Person {
  FirstName: string;
  LastName: string;
  Age: number;
  BirthDay: string;
  hasHair: boolean;
  Address: Address;
  HairColor: colors;
  mayday: string;
}


/**
  * Data contract for SignalDomain.colors
  */
export class colors {
  red: 0;
  blue: 1;
  white: 2;
}


/**
  * Data contract for SignalDomain.Address
  */
export class Address {
  State: string;
  City: string;
}
export default SignalRDM;
//#endregion data contracts
