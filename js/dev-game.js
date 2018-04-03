var i=0;
var row = '<div class = "row">';
var endRow = '</div>';
var colSix = '<div class = "col-6">';
var thisRow = '';
var pageTitle = '<div class = "row"> <h1 align = "center"> Birds Resource Guide</h1><div>';
var thisTitle;
var jsonLength = json.resources.length; 
$("#website").append(pageTitle); //adds html elements to index.html
while(i < jsonLength){
	for (r = 0; r < 2 && i<jsonLength; r++){
		var bookImage = HTMLbookImage.replace("%data%", json.resources[i].standardNumbers[0].data);
		var bookTitle = HTMLbookTitle.replace("%data%", json.resources[i].shortTitle);
		var callLocation;
		if (json.resources[i].holdingsInformations[0].callPrefix === null){
			callLocation = HTMLcallLocation.replace("%data%", json.resources[i].holdingsInformations[0].callClass)
		}else {
			callLocation = HTMLcallLocation.replace("%data%", json.resources[i].holdingsInformations[0].callPrefix + " " + json.resources[i].holdingsInformations[0].callClass)
		}
		thisTitle = colSix.concat(bookImage, callLocation, endRow);
		thisRow = thisRow.concat(thisTitle); 
		thisTitle='';
		i++; 
		
	}
	
	var webpage = row.concat(thisRow, endRow); //add all elements to the webpage
	$("#website").append(webpage); //adds html elements to index.html
	webpage = '';
	thisRow = '';
	 
 
	
	

}
	

