//The first thing we’re going to implement is the code which is needed to retrieve issues from the Local Storage. 
function fetchIssues() {
    var issues = JSON.parse(localStorage.getItem('issues'));
    var issuesList = document.getElementById('issuesList');

    issuesList.innerHTML = '';

    for (var i = 0; i < issues.length; i++) {
        var id = issues[i].id;
        var desc = issues[i].description;
        var severity = issues[i].severity;
        var assignedTo = issues[i].assignedTo;
        var status = issues[i].status;
        document.getElementById('issueInputForm').addEventListener('submit', saveIssue);
        
        //inserting into  div id = issuesList

        //+= is assignment operator
        //issuesList.innerHTML is an HTML template
        issuesList.innerHTML += 
        // + means concatenation
        //javascript knows when a string is an HTML element
            '<div class="well">' +
            '<h6>Issue ID: ' + id + '</h6>' +
            '<p><span class="label label-info">' + status + '</span></p>' +
            '<h3>' + desc + '</h3>' +
            '<p><span class="glyphicon glyphicon-time"></span> ' + severity + ' ' +
            '<span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>' +
            '<a href="#" class="btn btn-warning" onclick="setStatusClosed(\'' + id + '\')">Close</a> ' +
            '<a href="#" class="btn btn-danger" onclick="deleteIssue(\'' + id + '\')">Delete</a>' +
            '</div>';

             
function saveIssue(e) {
 var issueId = chance.guid();
 var issueDesc = document.getElementById('issueDescInput').value;
 var issueSeverity = document.getElementById('issueSeverityInput').value;
 var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
 var issueStatus = 'Open';
 var issue = {
  id: issueId,
  description: issueDesc,
  severity: issueSeverity,
  assignedTo: issueAssignedTo,
  status: issueStatus
 }
 
 if (localStorage.getItem('issues') === null) {
  var issues = [];
  issues.push(issue);
  localStorage.setItem('issues', JSON.stringify(issues));
 } else {
  var issues = JSON.parse(localStorage.getItem('issues'));
  issues.push(issue);
  localStorage.setItem('issues', JSON.stringify(issues));
 }
 
 document.getElementById('issueInputForm').reset();
​
 fetchIssues();
 
 e.preventDefault(); 
}
    }


}

//explanation code above:

//The first line of code is retrieving issues from Local Storage in the JS window
// This is done by executing localStorage.getItem('issues') and 
//parse the string result into a JSON object. 

//With the second line of code we're retrieving the reference 
//to the <div> element with id issuesList. The HTML content of 
//that element can be accessed by property innerHTML. 
//First we're using that property to set the content to an empty 
//string. Next we're looping over the elements in issues by 
//using a for loop and adding the HTML output for that element 
//to issuesList.innerHTML.