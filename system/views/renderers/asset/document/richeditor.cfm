<cfscript>
	ext          = ListLast( args.storage_path ?: "", "." );
	assetRootUrl = getSetting( name="cfstatic_generated_url", defaultValue="/_assets" );
	assetLink    = event.buildLink( assetId=args.id );
	linkTitle    = Len( Trim( args.link_text ?: "" ) ) ? args.link_text : ( args.label ?: "" );
</cfscript>

<cfoutput>
	<a href="#assetLink#">
		<img src="#assetRootUrl#/images/asset-type-icons/32px/#LCase( ext )#.png" />
		#linkTitle#
	</a>
</cfoutput>