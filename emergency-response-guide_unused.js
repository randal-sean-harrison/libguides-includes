$(document).ready(function() {
   $('#response-zone').on('change', function() {

      switch ($('#response-zone').val()) {
         case 'll':
            $('#all-maps > div').addClass('hidden');
            $('#ll').removeClass('hidden');
            break;
         case '1':
            $('#all-maps > div').addClass('hidden');
            $('#1').removeClass('hidden');
            break;
         case '2':
            $('#all-maps > div').addClass('hidden');
            $('#2').removeClass('hidden');
            break;
         case '5':
            $('#all-maps > div').addClass('hidden');
            $('#5').removeClass('hidden');
            break;
         case '6':
            $('#all-maps > div').addClass('hidden');
            $('#6').removeClass('hidden');
            break;
         case '7':
            $('#all-maps > div').addClass('hidden');
            $('#7').removeClass('hidden');
            break;
         case '8':
            $('#all-maps > div').addClass('hidden');
            $('#8').removeClass('hidden');
            break;
         case '9':
            $('#all-maps > div').addClass('hidden');
            $('#9').removeClass('hidden');
            break;
         case '11':
            $('#all-maps > div').addClass('hidden');
            $('#11').removeClass('hidden');
            break;
         case '12':
            $('#all-maps > div').addClass('hidden');
            $('#12').removeClass('hidden');
            break;
         case 'annex':
            $('#all-maps > div').addClass('hidden');
            $('#annex').removeClass('hidden');
            break;
         case 'architecture':
            $('#all-maps > div').addClass('hidden');
            $('#architecture').removeClass('hidden');
            break;
         case 'mathematics':
            $('#all-maps > div').addClass('hidden');
            $('#mathematics').removeClass('hidden');
            break;
      }
   });
});
