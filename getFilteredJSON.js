module.exports = { getFiltJSON: function(fieldArray, resJSON){
	var filtJSON = {}
	filtJSON["children"] = []
	rawData = resJSON.data.children;
	for(var i=0;i< rawData.length; i++){
		tempObj={}
		for(var j=0; j< fieldArray.length; j++){
			attr = fieldArray[j]
			tempObj[attr] = rawData[i].data[attr];
			}
		filtJSON["children"].push(tempObj);
		}
	return filtJSON;
	}
};
