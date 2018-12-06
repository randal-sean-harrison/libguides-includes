$( document ).ready(function() {

$('#response-roles').on('change', function() {

   switch ($('#response-roles').val()) {
      case '1':
         $('.roles').addClass('hidden');
         $('#response-team-leader').removeClass('hidden');
         break;
      case '2':
         $('.roles').addClass('hidden');
         $('#emergency-response-liaison').removeClass('hidden');
         break;
      case '2.5':
         $('.roles').addClass('hidden');
         $('#administrative-financial-coordinator').removeClass('hidden');
         break;
      case '3':
         $('.roles').addClass('hidden');
         $('#assessment-coordinator').removeClass('hidden');
         break;
      case '4':
         $('.roles').addClass('hidden');
         $('#communications-coordinator').removeClass('hidden');
         break;
      case '5':
         $('.roles').addClass('hidden');
         $('#documentation-coordinator').removeClass('hidden');
         break;
      case '6':
         $('.roles').addClass('hidden');
         $('#health-safety-coordinator').removeClass('hidden');
         break;
      case '7':
         $('.roles').addClass('hidden');
         $('#salvage-coordinator').removeClass('hidden');
         break;
      case '8':
         $('.roles').addClass('hidden');
         $('#security-facilities-coordinator').removeClass('hidden');
         break;
      case '9':
         $('.roles').addClass('hidden');
         $('#supplies-equipment-coordinator').removeClass('hidden');
         break;
      case '10':
         $('.roles').addClass('hidden');
         $('#sc-communications-coordinator').removeClass('hidden');
         break;
      case '11':
         $('.roles').addClass('hidden');
         $('#sc-documentation-coordinator').removeClass('hidden');
         break;
      case '12':
         $('.roles').addClass('hidden');
         $('#sc-first-response-coordinator').removeClass('hidden');
         break;
      case '13':
         $('.roles').addClass('hidden');
         $('#sc-security-coordinator').removeClass('hidden');
         break;
   }
});

});
