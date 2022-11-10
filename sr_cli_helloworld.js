/**
 * @NApiVersion 2.1
 * @NScriptTyper ClientScript                                                     //1° passo ---> Chamar a API e definir o ScriptType
 */


define(["N/record", "N/search", "N/ui/message"], function (record, search, message) { //2° passo ---> definição dos módulos

   function showMessage(context) {
      var currentRecord = context.currentRecord;

      var firstName = currentRecord.getValue({
         fieldId: 'firstname'
      });                                                                      //3° passo ---> criar uma função para cada ação que vai ser realizada 

      message.create({
         title: 'Hello, ' + firstName,
         message: "You've used a dependecy correctly.",
         type: message.Type.CONFIRMATION
      }).show();
   }

   return {
      pageInit: showMessage                                                       //4° passo ---> retornar as funções 
   }
});