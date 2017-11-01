/* http://keith-wood.name/countdown.html
   Greek initialisation for the jQuery countdown extension
   Written by Philip(some add by Giorgos Dimitriadis) */
(function($) {
	$.countdown.regionalOptions['el'] = {
		labels: ['ΧΡΟΝΙΑ', 'ΜΗΝΕΣ', 'ΕΒΔΟΜΑΔΕΣ', 'ΗΜΕΡΕΣ', 'ΩΡΕΣ', 'ΛΕΠΤΑ', 'ΔΕΥΤΕΡΟΛΕΠΤΑ'],
		labels1: ['ΧΡΟΝΟΣ', 'ΜΗΝΑΣ', 'ΕΒΔΟΜΑΔΑ', 'ΗΜΕΡΑ', 'ΩΡΑ', 'ΛΕΠΤΟ', 'ΔΕΥΤΕΡΟΛΕΠΤΟ'],
		compactLabels: ['Χρ.', 'Μην.', 'Εβδ.', 'Ημ.'],
		whichLabels: null,
		digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
		timeSeparator: ':', isRTL: false};
	$.countdown.setDefaults($.countdown.regionalOptions['el']);
})(jQuery);