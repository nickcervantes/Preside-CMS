( function( $ ){

	var activeFormClass = $( ".quick-add-form" ).length ? ".quick-add-form" : ".edit-object-form";
	var $form           = $( activeFormClass );

	if ( $form.length ) {
		var $groupFilterFieldset   = $form.find( "#fieldset-group-filter" )
		  , $folderPickerContainer = $form.find( "#filter_folder" ).closest( ".form-group" )
		  , $favouriteInput        = $form.find( "[name=is_favourite]" )
		  , getRadioValue
		  , getFilterScope
		  , enableFieldsetsBasedOnFilterScope
		  , toggleFolderPicker;

		getRadioValue = function( name ) {
			var $selectedRadio = $form.find( "[name=" + name + "]:checked" );

			if ( $selectedRadio.length ) {
				return $selectedRadio.val();
			}

			return "";
		}
		getFilterScope = function(){ return getRadioValue( "rule_scope" ) };

		enableFieldsetsBasedOnFilterScope = function(){
			var filterScope = getFilterScope();

			switch( filterScope ) {
				case "group":
					$groupFilterFieldset.show();
				break;

				default:
					$groupFilterFieldset.hide();
			}
		};

		toggleFolderPicker = function(){
			if ( $favouriteInput.is( ":checked" ) ) {
				$folderPickerContainer.hide();
			} else {
				$folderPickerContainer.show();
			}
		};

		$form.on( "click change", "[name=rule_scope]", enableFieldsetsBasedOnFilterScope );
		$form.on( "click change", "[name=is_favourite]", toggleFolderPicker );

		enableFieldsetsBasedOnFilterScope();
		toggleFolderPicker();
	}

} )( presideJQuery );