(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{12:function(e,t,a){e.exports=a(20)},17:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(6),s=a.n(r),o=a(3),l=a(2),c=a(9),u=a(7),m=a(8),d=a(11),h=a(10),p=a(4),b=a.n(p),g=(a(17),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),y=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],f=a(1),v=a.n(f),E={userId:v.a.number.isRequired,id:v.a.number.isRequired,title:v.a.string.isRequired,completed:v.a.bool.isRequired},k=(v.a.number.isRequired,v.a.string.isRequired,v.a.arrayOf(v.a.shape(E)).isRequired,function(e){var t=e.user,a=t.name,n=t.todos;return i.a.createElement(i.a.Fragment,null,n.map((function(e){return i.a.createElement("tr",{key:e.id},i.a.createElement("th",null,e.id),i.a.createElement("td",null,a),i.a.createElement("td",null,e.title),i.a.createElement("td",null,e.completed?"Completed":"Not completed yet"))})))}),S=function(e){var t=e.usersWithTodos;return i.a.createElement("table",{className:"table is-bordered is-striped is-narrow is-hoverable"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"ID"),i.a.createElement("th",null,"User"),i.a.createElement("th",null,"Task"),i.a.createElement("th",null,"Status"))),i.a.createElement("tbody",null,t.map((function(e){return i.a.createElement(k,{user:e,key:e.id})}))))},w=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={userId:"",id:y.length+1,title:"",completed:!1,todos:Object(c.a)(y)},e.onChange=function(t){var a=t.target,n=a.name,i=a.value;"userId"===n?e.setState(Object(l.a)({},n,+i)):e.setState(Object(l.a)({},n,i))},e.onSubmit=function(e){e.preventDefault()},e.addTask=function(){var t=e.state,a=t.id,n=t.title,i=t.completed,r=t.userId;""!==n&&""!==r&&(e.state.todos.push({userId:r,id:a,title:n,completed:i}),e.setState((function(e){return{id:e.id+1,userId:"",title:""}})))},e.usersWithTodos=function(){return g.map((function(t){return Object(o.a)(Object(o.a)({},t),{},{todos:e.state.todos.filter((function(e){return e.userId===t.id}))})}))},e}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Add todo form"),i.a.createElement("form",{onSubmit:this.onSubmit,className:"App__form"},i.a.createElement("label",null,i.a.createElement("input",{type:"text",placeholder:"Title",name:"title",value:this.state.title,required:!0,onChange:this.onChange}),i.a.createElement("div",{className:b()(this.state.title?"is-invisible":"is-size-6")},"Please enter the title")),i.a.createElement("label",null,i.a.createElement("select",{name:"userId",value:this.state.userId,onChange:this.onChange,required:!0},i.a.createElement("option",{value:"0"},"Choose user"),g.map((function(e){return i.a.createElement("option",{value:e.id,key:e.id},e.name)}))),i.a.createElement("div",{className:b()(this.state.userId?"is-invisible":"is-size-6")},"Please choose a user")),i.a.createElement("button",{type:"submit",className:"button is-primary",onClick:this.addTask},"Add")),i.a.createElement(S,{usersWithTodos:this.usersWithTodos()}))}}]),a}(i.a.Component);s.a.render(i.a.createElement(w,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.cf5b449a.chunk.js.map