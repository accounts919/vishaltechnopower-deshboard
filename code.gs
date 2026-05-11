// ===================================================================
// VISHAL TECHNOPOWER v8.0 - FINAL COMPLETE
// Excel Fix + Work Approval Only + Date Range + Payment Feature
// ===================================================================

var SPREADSHEET_ID = '1w8I54IrdJldlUOXJ-GkG9GfXBndA957OhxJr_n7IiIg';
var ACCOUNTS_EMAIL = 'accounts@vishaltechnopower.com,accounts2.ve@yahoo.com,accounts.vishalelectricals@yahoo.com,';
var COMPANY_NAME = 'VISHAL TECHNOPOWER';
var COMPANY_WEBSITE = 'https://vishaltechnopower.com/';

// ==================== ENGINEERS ====================
var ENGINEERS = {
  "VT001":{name:"SUJIT VAL",pass:"SUJITVAL@001",email:"sujithvalsalan225@gmail.com"},
  "VT002":{name:"SURESH",pass:"SURESH@002",email:"suresh.vishal@gmail.com"},
  "VT003":{name:"UMENDRA",pass:"UMENDRA@003",email:"umendrapratap786@gmail.com"},
  "VT004":{name:"BALRAM KUMAR",pass:"BALRAM@004",email:"balramkumar746103@gmail.com"},
  "VT005":{name:"ABHISHEK KUMAR",pass:"ABHISHEK@005",email:"abhishekkumar80771@gmail.com"},
  "VT006":{name:"CHANDRA SHEKHAR (PM)",pass:"CHANDRA@006",email:"chandra.vishal@gmail.com"},
  "VT007":{name:"UDAY JAISWAL",pass:"UDAY@007",email:"uday.vishal@gmail.com"},
  "VT008":{name:"SUMIT",pass:"SUMIT@008",email:"sumit.vishal@gmail.com"},
  "VT009":{name:"SHOBIN",pass:"SHOBIN@009",email:"shobinchezhian11@gmail.com"},
  "VT010":{name:"AJAY KAKAD",pass:"AJAY@010",email:"ajay.vishal@gmail.com"},
  "VT011":{name:"CHANDRA PRAKASH",pass:"CHANDRA@011",email:"tiw8542885740@gmail.com"},
  "VT012":{name:"RAVI",pass:"RAVI@012",email:"ravi.vishal@gmail.com"},
  "VT013":{name:"RAJIV",pass:"RAJIV@013",email:"rajiv76191@gmail.com"},
  "VT014":{name:"NITESH KUMAR",pass:"NITESH@014",email:"niteshkmr8030@gmail.com"},
  "VT015":{name:"KARAN SHRIVASTAVA",pass:"KARAN@015",email:"srivastavakaran282@gmail.com"},
  "VT016":{name:"B SAI KIRAN",pass:"SAI@016",email:"bhukyasaikiran22@gmail.com"},
  "VT017":{name:"MANISH",pass:"MANISH@017",email:"manimanish610@gmail.com"},
  "VT018":{name:"BIPIN",pass:"BIPIN@018",email:"imbipink@gmail.com"},
  "VT019":{name:"PRAMOD",pass:"PRAMOD@019",email:"premkumar97531@gmail.com"},
  "VT020":{name:"ANSHU",pass:"ANSHU@020",email:"anshukrnke61@gmail.com"},
  "VT021":{name:"SHIVAJI",pass:"SHIVAJI@021",email:"shivajichaurasiya2002@gmail.com"},
  "VT022":{name:"DURGESH KUMAR",pass:"DURGESH@022",email:"saradyadav9554@gmail.com"},
  "VT023":{name:"RAVI YADAV (PM)",pass:"RAVI@023",email:"projects11.vishalelectricals@gmail.com"},
  "VT024":{name:"VICKY (PM HEAD)",pass:"VICKY@024",email:"vicky.vishalelectricals@yahoo.com"},
  "VT025":{name:"KESHAV KRISHNAMURTI",pass:"KESHAV@025",email:"keshavkrishnamurti@gmail.com"}
};

// ==================== PROJECTS ====================
var PROJECT_MANAGERS = {
  "IOCL Moradabad":"projects5.vishalelectricals@yahoo.com",
  "IOCL Sarpara":"projects5.vishalelectricals@yahoo.com",
  "IOCL Panipat Refinery":"projects5.vishalelectricals@yahoo.com",
  "NCF Hyderabad":"projects5.vishalelectricals@yahoo.com",
  "IOCL Bhatinda":"projects5.vishalelectricals@yahoo.com",
  "NFC Hyderabad":"projects5.vishalelectricals@yahoo.com",
  "IOCL Panipat Complex":"projects5.vishalelectricals@yahoo.com",
  "AAI Chandigarh":"projects5.vishalelectricals@yahoo.com",
  "AAI AMRITSAR":"vicky.vishalelectricals@yahoo.com",
  "TLL PUNJAB":"vicky.vishalelectricals@yahoo.com",
  "IOCL Jharsuguda":"projectspm.ve@gmail.com",
  "IOCL Jatni":"projectspm.ve@gmail.com",
  "IOCL Mumbai":"projectspm.ve@gmail.com",
  "Paradeep Port Authority":"projectspm.ve@gmail.com",
  "IOCL Salem":"projectspm.ve@gmail.com",
  "IOCL Paradeep HM":"projectspm.ve@gmail.com",
  "IOCL Hisar":"projectspm.ve@gmail.com"
};

var MANAGER_CREDENTIALS = {
  "projects5.vishalelectricals@yahoo.com":{name:"CHANDRA  (PM)",pass:"CHANDRA@MGR01"},
  "vicky.vishalelectricals@yahoo.com":{name:"VICKY (PM HEAD)",pass:"VICKY@MGR02"},
  "projectspm.ve@gmail.com":{name:"RAVI YADAV (PM)",pass:"RAVI@MGR03"}
};

var ACCOUNTS_CRED = {id:"ACCOUNTS",pass:"ACCOUNTS@2025"};

var CATEGORIES = {
  "Conveyance":{subheads:["Auto","Bus","Train","Metro","Flight","Rapido","Cab","Ola","Uber"],hasFromTo:true,hasDescription:false},
  "Material":{subheads:["SOR Item","Non SOR Item","Consumable Item"],hasFromTo:false,hasDescription:true},
  "Hotel":{subheads:["Room","Fooding"],hasFromTo:false,hasDescription:true},
  "Machine & Tool":{subheads:["Hydra","JCB","Farana","Generator/DG","Breaker Machine","Hillty Machine","Tractor"],hasFromTo:false,hasDescription:true},
  "Labour Payment":{subheads:["Daily Labour","Skilled Labour","Helper","Supervisor"],hasFromTo:false,hasDescription:true},
  "Fuel":{subheads:["Petrol","Diesel","CNG"],hasFromTo:false,hasDescription:true},
  "Miscellaneous":{subheads:["Office Supplies","Printing","Courier","Phone/Internet","Other"],hasFromTo:false,hasDescription:true}
};

// ================================================================
function doGet(e){
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('VT Expense Management')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport','width=device-width,initial-scale=1.0,maximum-scale=1.0');
}

// ================================================================
// HELPERS
// ================================================================
function SS(){
  try{return SpreadsheetApp.openById(SPREADSHEET_ID)}
  catch(e){
    var s=SpreadsheetApp.create('VT Expense Management');
    Logger.log('NEW SS: '+s.getId()+' URL:'+s.getUrl());
    return s;
  }
}
function SH(n){
  var ss=SS();var s=ss.getSheetByName(n);
  if(!s){runSetup();s=ss.getSheetByName(n)}
  if(!s)s=ss.insertSheet(n);
  return s;
}
function ID(p){return p+'_'+Date.now()+'_'+Math.floor(Math.random()*9000+1000)}
function NOW(){return Utilities.formatDate(new Date(),Session.getScriptTimeZone(),'dd-MMM-yyyy hh:mm a')}
function TODAY(){return Utilities.formatDate(new Date(),Session.getScriptTimeZone(),'yyyy-MM-dd')}
function FDATE(v){if(!v)return'';if(v instanceof Date)return Utilities.formatDate(v,Session.getScriptTimeZone(),'yyyy-MM-dd');return String(v)}
function HDR(s,n){s.getRange(1,1,1,n).setBackground('#00BFFF').setFontColor('#fff').setFontWeight('bold').setFontSize(10).setHorizontalAlignment('center');s.setFrozenRows(1)}
function LOG(u,n,r,a,d){try{SH('ActivityLog').appendRow([NOW(),u,n,r,a,d])}catch(e){}}
function CLR(s,r,b){try{s.getRange(r,1,1,s.getLastColumn()).setBackground(b)}catch(e){}}

// ================================================================
// SETUP - Pehli Baar Zaroor Run Karo
// ================================================================
function runSetup(){
  var ss=SS();

  // Expenses Sheet - Sare expense records yahan save hote hain
  if(!ss.getSheetByName('Expenses')){
    var s=ss.insertSheet('Expenses');
    s.getRange(1,1,1,21).setValues([[
      'EXP_ID','Engineer_ID','Engineer_Name','Engineer_Email',
      'Project','Manager_Email','Date','Category_Head','Category_SubHead',
      'From_Location','To_Location','Description','Amount',
      'Attachment_URL','Attachment_Name','Status','Submitted_At',
      'Action_At','Action_By','Remarks','Batch_ID'
    ]]);
    HDR(s,21);
    Logger.log('Expenses sheet bani');
  }

  // Drafts Sheet - Engineer ka adhura kaam save hota hai
  if(!ss.getSheetByName('Drafts')){
    var d=ss.insertSheet('Drafts');
    d.getRange(1,1,1,7).setValues([[
      'Draft_ID','Engineer_ID','Engineer_Name',
      'Draft_JSON','Saved_At','Row_Count','Total_Amount'
    ]]);
    HDR(d,7);d.setColumnWidth(4,800);
    Logger.log('Drafts sheet bani');
  }

  // WorkApprovals Sheet - Kaam ki anumati ke liye
  if(!ss.getSheetByName('WorkApprovals')){
    var a=ss.insertSheet('WorkApprovals');
    a.getRange(1,1,1,16).setValues([[
      'APV_ID','Engineer_ID','Engineer_Name','Engineer_Email',
      'Project','Manager_Email','Date','Amount','Description',
      'Attachment_URL','Attachment_Name','Status','Submitted_At',
      'Action_At','Action_By','Remarks'
    ]]);
    HDR(a,16);
    Logger.log('WorkApprovals sheet bani');
  }

  // ActivityLog - Kaun kab kya kiya
  if(!ss.getSheetByName('ActivityLog')){
    var l=ss.insertSheet('ActivityLog');
    l.getRange(1,1,1,6).setValues([['Timestamp','User_ID','User_Name','Role','Action','Details']]);
    HDR(l,6);
    Logger.log('ActivityLog sheet bani');
  }

  try{var df=ss.getSheetByName('Sheet1');if(df&&ss.getSheets().length>1)ss.deleteSheet(df)}catch(e){}
  Logger.log('SETUP COMPLETE: '+ss.getUrl());
  return 'Done! Sheet URL: '+ss.getUrl()+' | Sheet ID: '+ss.getId();
}

// ================================================================
// LOGIN
// ================================================================
function serverLogin(role,userId,password,email){
  try{
    if(role==='engineer'){
      var uid=String(userId).toUpperCase().trim();
      if(!ENGINEERS[uid])return{success:false,message:'Invalid Employee ID!'};
      if(ENGINEERS[uid].pass!==String(password).trim())return{success:false,message:'Wrong password!'};
      LOG(uid,ENGINEERS[uid].name,'Engineer','LOGIN','OK');
      return{success:true,role:'engineer',
        user:{id:uid,name:ENGINEERS[uid].name,email:ENGINEERS[uid].email},
        projects:Object.keys(PROJECT_MANAGERS),categories:CATEGORIES};
    }
    if(role==='manager'){
      var me=String(email).trim();
      if(!me||!MANAGER_CREDENTIALS[me])return{success:false,message:'Select valid manager!'};
      if(MANAGER_CREDENTIALS[me].pass!==String(password).trim())return{success:false,message:'Wrong password!'};
      var mp=[];for(var k in PROJECT_MANAGERS){if(PROJECT_MANAGERS[k]===me)mp.push(k)}
      LOG(me,MANAGER_CREDENTIALS[me].name,'Manager','LOGIN','OK');
      return{success:true,role:'manager',
        user:{email:me,name:MANAGER_CREDENTIALS[me].name},
        projects:mp,categories:CATEGORIES};
    }
    if(role==='accounts'){
      if(String(userId).toUpperCase().trim()!==ACCOUNTS_CRED.id||
         String(password).trim()!==ACCOUNTS_CRED.pass)
        return{success:false,message:'Invalid credentials!'};
      LOG('ACC','Accounts','Accounts','LOGIN','OK');
      return{success:true,role:'accounts',
        user:{id:'ACCOUNTS',name:'Accounts Dept'},
        projects:Object.keys(PROJECT_MANAGERS),
        categories:CATEGORIES,
        engineers:ENGINEERS};
    }
    return{success:false,message:'Invalid role!'};
  }catch(e){return{success:false,message:e.toString()}}
}

// ================================================================
// DRAFT SAVE
// ================================================================
function serverSaveDraft(engId,engName,rowsData){
  try{
    var ss=SS();var sheet=ss.getSheetByName('Drafts');
    if(!sheet){
      sheet=ss.insertSheet('Drafts');
      sheet.getRange(1,1,1,7).setValues([['Draft_ID','Engineer_ID','Engineer_Name','Draft_JSON','Saved_At','Row_Count','Total_Amount']]);
      HDR(sheet,7);sheet.setColumnWidth(4,800);
    }
    var json='',rc=0,ta=0;
    if(typeof rowsData==='string'){
      json=rowsData;
      try{var p=JSON.parse(rowsData);if(Array.isArray(p)){rc=p.length;for(var i=0;i<p.length;i++)ta+=Number(p[i].amount)||0}}catch(e){}
    }else if(Array.isArray(rowsData)){
      rc=rowsData.length;for(var j=0;j<rowsData.length;j++)ta+=Number(rowsData[j].amount)||0;
      json=JSON.stringify(rowsData);
    }else if(rowsData&&typeof rowsData==='object'){
      var arr=[];for(var k in rowsData){if(rowsData.hasOwnProperty(k)){arr.push(rowsData[k]);ta+=Number(rowsData[k].amount)||0}}
      rc=arr.length;json=JSON.stringify(arr);
    }
    if(rc===0)return{success:false,message:'No rows to save!'};
    var data=sheet.getDataRange().getValues();var er=-1;
    for(var i=1;i<data.length;i++){if(String(data[i][1]).trim()===String(engId).trim()){er=i+1;break}}
    if(er>0){
      sheet.getRange(er,1).setValue(ID('DFT'));sheet.getRange(er,4).setValue(json);
      sheet.getRange(er,5).setValue(NOW());sheet.getRange(er,6).setValue(rc);sheet.getRange(er,7).setValue(ta);
    }else{
      sheet.appendRow([ID('DFT'),String(engId),String(engName),json,NOW(),rc,ta]);
    }
    return{success:true,message:'Draft saved! '+rc+' rows (Rs.'+ta+')'};
  }catch(e){Logger.log('Draft save: '+e);return{success:false,message:'Save failed: '+e.toString()}}
}

// ================================================================
// DRAFT LOAD
// ================================================================
function serverLoadDraft(engineerId){
  try{
    var sheet=SS().getSheetByName('Drafts');
    if(!sheet)return{success:false,message:'No drafts sheet.'};
    var data=sheet.getDataRange().getValues();
    for(var i=1;i<data.length;i++){
      if(String(data[i][1]).trim()===String(engineerId).trim()){
        var json=String(data[i][3]);
        if(!json||json===''||json==='undefined')return{success:false,message:'Draft empty.'};
        try{var t=JSON.parse(json);if(!Array.isArray(t)||t.length===0)return{success:false,message:'Invalid.'}}
        catch(e){return{success:false,message:'Corrupted.'}}
        return{success:true,draftData:json,savedAt:String(data[i][4]),
          rowCount:Number(data[i][5])||0,totalAmount:Number(data[i][6])||0,
          message:'Draft loaded! '+data[i][5]+' rows from '+data[i][4]};
      }
    }
    return{success:false,message:'No draft found.'};
  }catch(e){return{success:false,message:e.toString()}}
}

function serverDeleteDraft(eid){
  try{var s=SS().getSheetByName('Drafts');if(!s)return;var d=s.getDataRange().getValues();
  for(var i=d.length-1;i>=1;i--){if(String(d[i][1]).trim()===String(eid).trim())s.deleteRow(i+1)}}catch(e){}
}

// ================================================================
// FILE SAVE - Bill/Receipt Drive mein save karna
// ================================================================
function saveFile(fo,rid){
  try{
    var folders=DriveApp.getFoldersByName('VT_Expense_Attachments');
    var folder;
    if(folders.hasNext()){folder=folders.next()}
    else{
      folder=DriveApp.createFolder('VT_Expense_Attachments');
      folder.setSharing(DriveApp.Access.ANYONE_WITH_LINK,DriveApp.Permission.VIEW);
    }
    var parts=String(fo.data).split(',');
    var mime=parts[0].match(/:(.*?);/)[1];
    var decoded=Utilities.base64Decode(parts[1]);
    var blob=Utilities.newBlob(decoded,mime,rid+'_'+fo.name);
    var file=folder.createFile(blob);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK,DriveApp.Permission.VIEW);
    Logger.log('File saved: '+fo.name+' URL:'+file.getUrl());
    return{url:file.getUrl(),name:fo.name};
  }catch(e){Logger.log('saveFile ERROR: '+e);return{url:'',name:fo?fo.name:'file'}}
}

// ================================================================
// GET BLOB FROM DRIVE - Bill download karna email ke liye
// ================================================================
function getBlobFromDrive(url){
  try{
    if(!url||url===''||url==='undefined'||url==='null'){return null}
    var fileId='';
    // Different Google Drive URL formats
    if(url.indexOf('/d/')!==-1){
      fileId=url.split('/d/')[1];
      if(fileId.indexOf('/')!==-1)fileId=fileId.split('/')[0];
    }else if(url.indexOf('id=')!==-1){
      fileId=url.split('id=')[1];
      if(fileId.indexOf('&')!==-1)fileId=fileId.split('&')[0];
    }else if(url.indexOf('open?id=')!==-1){
      fileId=url.split('open?id=')[1];
      if(fileId.indexOf('&')!==-1)fileId=fileId.split('&')[0];
    }
    if(!fileId){Logger.log('No file ID in URL: '+url);return null}
    var file=DriveApp.getFileById(fileId);
    var blob=file.getBlob();
    Logger.log('Blob OK: '+file.getName()+' size:'+blob.getBytes().length+' bytes');
    return blob;
  }catch(e){
    Logger.log('getBlobFromDrive ERROR: url='+url+' err='+e.toString());
    return null;
  }
}

// ================================================================
// CREATE EXCEL (.xlsx) - Manager ko Excel report banana
// ================================================================
function createExcelReport(eng,items,proj){
  var tmpSS=null;var tmpId='';
  try{
    Logger.log('Creating Excel for: '+eng.name+' Project: '+proj+' Items: '+items.length);
    tmpSS=SpreadsheetApp.create('VT_RPT_'+Date.now());
    tmpId=tmpSS.getId();
    Logger.log('Temp spreadsheet created: '+tmpId);

    var sh=tmpSS.getActiveSheet();sh.setName('Expenses');
    var r=1,c=8;

    // Company Header
    sh.getRange(r,1,1,c).merge().setValue(COMPANY_NAME)
      .setBackground('#00BFFF').setFontColor('#FFFFFF')
      .setFontSize(15).setFontWeight('bold').setHorizontalAlignment('center');
    sh.setRowHeight(r,36);r++;

    // Slogan
    sh.getRange(r,1,1,c).merge().setValue('ENGINEERING YOUR ELECTRICAL NEEDS')
      .setBackground('#0080B3').setFontColor('#FFFFFF').setFontSize(9)
      .setHorizontalAlignment('center');r++;

    // Report Title
    sh.getRange(r,1,1,c).merge().setValue('EXPENSE REPORT')
      .setBackground('#1a237e').setFontColor('#FFFFFF')
      .setFontSize(12).setFontWeight('bold').setHorizontalAlignment('center');
    sh.setRowHeight(r,28);r++;r++;

    // Info Rows
    sh.getRange(r,1,1,2).merge().setValue('PROJECT:').setFontWeight('bold').setBackground('#e0f7fa');
    sh.getRange(r,3,1,c-2).merge().setValue(proj).setFontWeight('bold').setFontColor('#0080B3').setBackground('#e0f7fa');r++;

    sh.getRange(r,1,1,2).merge().setValue('ENGINEER:').setFontWeight('bold').setBackground('#f0f8ff');
    sh.getRange(r,3,1,c-2).merge().setValue(eng.name+' ('+eng.id+')').setFontWeight('bold').setBackground('#f0f8ff');r++;

    sh.getRange(r,1,1,2).merge().setValue('SUBMITTED:').setFontWeight('bold').setBackground('#f0f8ff');
    sh.getRange(r,3,1,c-2).merge().setValue(NOW()).setBackground('#f0f8ff');r++;r++;

    // Table Headers
    sh.getRange(r,1,1,c).setValues([['#','Date','Category','Sub Category','From','To / Description','Amount (Rs.)','Bill']])
      .setBackground('#1a237e').setFontColor('#FFFFFF').setFontWeight('bold')
      .setFontSize(10).setHorizontalAlignment('center');
    sh.setRowHeight(r,24);r++;

    var total=0;
    for(var i=0;i<items.length;i++){
      var it=items[i];
      var amt=Number(it.amount)||0;total+=amt;
      var fromV=it.fromLocation||'';
      var detV=(it.fromLocation&&it.toLocation)?it.toLocation:(it.description||'-');
      var billV=(it.attachUrl&&it.attachUrl!==''&&it.attachUrl!=='undefined')?'YES':'NO';
      var bg=(i%2===0)?'#FFFFFF':'#f5f5f5';
      sh.getRange(r,1,1,c).setValues([[i+1,it.date,it.categoryHead,it.categorySubHead||'-',fromV,detV,amt,billV]])
        .setBackground(bg).setFontSize(10);
      sh.getRange(r,7).setNumberFormat('#,##0').setFontWeight('bold');
      if(billV==='YES')sh.getRange(r,8).setFontColor('#2e7d32').setFontWeight('bold');
      else sh.getRange(r,8).setFontColor('#c62828');
      r++;
    }

    // Total Row
    sh.getRange(r,1,1,6).merge().setValue('TOTAL AMOUNT')
      .setBackground('#e8f5e9').setFontWeight('bold').setFontSize(12)
      .setHorizontalAlignment('right');
    sh.getRange(r,7).setValue(total).setNumberFormat('#,##0')
      .setBackground('#e8f5e9').setFontWeight('bold').setFontSize(14).setFontColor('#2e7d32');
    sh.getRange(r,8).setValue(items.length+' entries').setBackground('#e8f5e9');

    // Column Widths
    var widths=[50,90,115,115,130,190,105,70];
    for(var w=0;w<widths.length;w++)sh.setColumnWidth(w+1,widths[w]);

    // IMPORTANT: Flush karo aur wait karo
    SpreadsheetApp.flush();
    Utilities.sleep(2000);

    // Export as XLSX
    var exportUrl='https://docs.google.com/spreadsheets/d/'+tmpId+'/export?format=xlsx';
    var token=ScriptApp.getOAuthToken();

    Logger.log('Exporting Excel from: '+exportUrl);
    var response=UrlFetchApp.fetch(exportUrl,{
      method:'GET',
      headers:{'Authorization':'Bearer '+token},
      muteHttpExceptions:true
    });

    var code=response.getResponseCode();
    Logger.log('Excel export response code: '+code);

    if(code!==200){
      Logger.log('Excel export FAILED. Code: '+code+' Body: '+response.getContentText().substring(0,200));
      try{DriveApp.getFileById(tmpId).setTrashed(true)}catch(e2){}
      return null;
    }

    var fileName='VT_'+eng.name.replace(/\s+/g,'_')+'_'+proj.replace(/[^a-zA-Z0-9]/g,'_')+'_'+TODAY()+'.xlsx';
    var excelBlob=response.getBlob().setName(fileName);
    Logger.log('Excel CREATED: '+fileName+' Size: '+excelBlob.getBytes().length+' bytes');

    // Delete temp spreadsheet
    try{DriveApp.getFileById(tmpId).setTrashed(true);Logger.log('Temp SS deleted')}catch(e2){}
    return excelBlob;

  }catch(e){
    Logger.log('createExcelReport ERROR: '+e.toString());
    if(tmpId){try{DriveApp.getFileById(tmpId).setTrashed(true)}catch(e2){}}
    return null;
  }
}

// ================================================================
// EMAIL HELPERS
// ================================================================
function eHdr(){
  return'<div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;'+
    'background:#ffffff;border-radius:10px;overflow:hidden;'+
    'box-shadow:0 4px 20px rgba(0,0,0,.1)">'+
    '<div style="background:linear-gradient(135deg,#00BFFF,#0080B3);padding:20px;text-align:center">'+
    '<h1 style="color:#fff;margin:0;font-size:18px;font-weight:800">VISHAL TECHNOPOWER</h1>'+
    '<p style="color:rgba(255,255,255,.7);margin:3px 0 0;font-size:8px;letter-spacing:2px">'+
    'ENGINEERING YOUR ELECTRICAL NEEDS</p></div>';
}
function eFtr(){
  return'<div style="background:#f8f9fa;padding:12px;text-align:center;border-top:1px solid #eee">'+
    '<p style="color:#999;font-size:9px;margin:0">'+COMPANY_NAME+
    ' | <a href="'+COMPANY_WEBSITE+'" style="color:#00BFFF">'+COMPANY_WEBSITE+'</a></p>'+
    '</div></div>';
}
function dashBtn(){
  var u='';try{u=ScriptApp.getService().getUrl()}catch(e){u=COMPANY_WEBSITE}
  return'<div style="text-align:center;margin-top:16px">'+
    '<a href="'+u+'" style="display:inline-block;background:linear-gradient(135deg,#00BFFF,#0080B3);'+
    'color:#fff;padding:10px 24px;border-radius:8px;text-decoration:none;font-weight:700;font-size:12px">'+
    'Open Dashboard</a></div>';
}

// ================================================================
// SEND EXPENSE EMAIL - Excel + Bills Attached
// Manager ko + Accounts ko
// ================================================================
function sendExpenseEmail(eng,items,proj,mgrEmail){
  var mn=MANAGER_CREDENTIALS[mgrEmail]?MANAGER_CREDENTIALS[mgrEmail].name:'Manager';
  var total=0;for(var i=0;i<items.length;i++)total+=Number(items[i].amount)||0;

  Logger.log('=== EXPENSE EMAIL START ===');
  Logger.log('To: '+mgrEmail+' | Project: '+proj+' | Items: '+items.length+' | Total: Rs.'+total);

  // Step 1: Collect bill blobs from Drive
  var billBlobs=[];
  for(var b=0;b<items.length;b++){
    var aUrl=items[b].attachUrl;
    if(aUrl&&aUrl!==''&&aUrl!=='undefined'&&aUrl!=='null'){
      try{
        var bl=getBlobFromDrive(aUrl);
        if(bl){
          var ext='pdf';
          try{var nm=bl.getName();if(nm.indexOf('.')!==-1)ext=nm.split('.').pop()}catch(xe){}
          bl.setName('Bill_'+(b+1)+'_'+items[b].date+'.'+ext);
          billBlobs.push(bl);
          Logger.log('Bill '+(b+1)+' collected: '+bl.getName()+' size:'+bl.getBytes().length);
        }else{Logger.log('Bill '+(b+1)+' blob is null for URL: '+aUrl)}
      }catch(e){Logger.log('Bill '+(b+1)+' ERROR: '+e.toString())}
    }
  }
  Logger.log('Total bills: '+billBlobs.length);

  // Step 2: Create Excel
  var excelBlob=null;
  try{excelBlob=createExcelReport(eng,items,proj)}catch(e){Logger.log('Excel ERROR: '+e)}
  Logger.log('Excel: '+(excelBlob?'OK size='+excelBlob.getBytes().length:'NULL'));

  // Step 3: Build attachment array
  var attachments=[];
  if(excelBlob&&excelBlob.getBytes().length>0){attachments.push(excelBlob);Logger.log('Excel added to attachments')}
  for(var a=0;a<billBlobs.length;a++){attachments.push(billBlobs[a])}
  Logger.log('Total attachments: '+attachments.length);

  // Step 4: Build email body with table
  var tableRows='';
  for(var j=0;j<items.length;j++){
    var it=items[j];var bg=(j%2===0)?'#ffffff':'#f5f5f5';
    var detail='';
    if(it.fromLocation&&it.fromLocation!==''&&it.toLocation&&it.toLocation!==''){
      detail='<b>From:</b> '+it.fromLocation+'<br><b>To:</b> '+it.toLocation;
    }else{detail=it.description||'-'}
    var billLink=(it.attachUrl&&it.attachUrl!==''&&it.attachUrl!=='undefined')?
      '<a href="'+it.attachUrl+'" style="color:#00BFFF;font-weight:600">View</a>':'-';
    tableRows+='<tr style="background:'+bg+'">'+
      '<td style="padding:6px 8px;border:1px solid #e0e0e0;text-align:center">'+(j+1)+'</td>'+
      '<td style="padding:6px 8px;border:1px solid #e0e0e0">'+it.date+'</td>'+
      '<td style="padding:6px 8px;border:1px solid #e0e0e0;font-weight:600">'+it.categoryHead+'</td>'+
      '<td style="padding:6px 8px;border:1px solid #e0e0e0">'+(it.categorySubHead||'-')+'</td>'+
      '<td style="padding:6px 8px;border:1px solid #e0e0e0">'+detail+'</td>'+
      '<td style="padding:6px 8px;border:1px solid #e0e0e0;font-weight:700;text-align:right">'+
        'Rs.'+Number(it.amount).toLocaleString()+'</td>'+
      '<td style="padding:6px 8px;border:1px solid #e0e0e0;text-align:center">'+billLink+'</td>'+
      '</tr>';
  }

  var body=eHdr()+
    '<div style="padding:20px">'+
    '<div style="background:#fff3e0;border-left:4px solid #ff6f00;padding:12px;border-radius:8px;margin-bottom:14px">'+
    '<h2 style="color:#e65100;margin:0;font-size:15px">Expense Report Submitted</h2>'+
    '<p style="color:#bf360c;margin:4px 0 0;font-size:11px">Dear <b>'+mn+'</b>, please review.</p></div>'+
    '<table style="width:100%;border-collapse:collapse;margin-bottom:12px">'+
    '<tr style="background:#f0f8ff"><td style="padding:8px;font-weight:700;width:120px">Engineer</td>'+
      '<td style="padding:8px">'+eng.name+' ('+eng.id+')</td></tr>'+
    '<tr><td style="padding:8px;font-weight:700">Project</td>'+
      '<td style="padding:8px;color:#0080B3;font-weight:700;font-size:14px">'+proj+'</td></tr>'+
    '<tr style="background:#f0f8ff"><td style="padding:8px;font-weight:700">Total Amount</td>'+
      '<td style="padding:8px;font-size:20px;font-weight:800;color:#0080B3">Rs.'+total.toLocaleString()+'</td></tr>'+
    '<tr><td style="padding:8px;font-weight:700">Entries</td><td style="padding:8px">'+items.length+'</td></tr>'+
    '<tr style="background:#f0f8ff"><td style="padding:8px;font-weight:700">Bills Attached</td>'+
      '<td style="padding:8px">'+billBlobs.length+' file(s)</td></tr>'+
    '<tr><td style="padding:8px;font-weight:700">Excel Report</td>'+
      '<td style="padding:8px">'+(excelBlob?'Attached':'Not available')+'</td></tr>'+
    '</table>'+
    '<table style="width:100%;border-collapse:collapse;border:1px solid #e0e0e0">'+
    '<tr style="background:#1a237e;color:#fff">'+
    '<th style="padding:7px 8px;border:1px solid #fff;font-size:10px">#</th>'+
    '<th style="padding:7px 8px;border:1px solid #fff;font-size:10px">Date</th>'+
    '<th style="padding:7px 8px;border:1px solid #fff;font-size:10px">Category</th>'+
    '<th style="padding:7px 8px;border:1px solid #fff;font-size:10px">Sub</th>'+
    '<th style="padding:7px 8px;border:1px solid #fff;font-size:10px">Detail</th>'+
    '<th style="padding:7px 8px;border:1px solid #fff;font-size:10px">Amount</th>'+
    '<th style="padding:7px 8px;border:1px solid #fff;font-size:10px">Bill</th></tr>'+
    tableRows+
    '<tr style="background:#e8f5e9">'+
    '<td colspan="5" style="padding:8px;border:1px solid #e0e0e0;text-align:right;font-weight:bold">TOTAL:</td>'+
    '<td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;font-size:14px;text-align:right;color:#2e7d32">'+
      'Rs.'+total.toLocaleString()+'</td>'+
    '<td style="border:1px solid #e0e0e0"></td></tr>'+
    '</table>'+dashBtn()+'</div>'+eFtr();

  var subject='[VT] Expense Rs.'+total.toLocaleString()+' | '+proj+' | '+eng.name;

  // Send to Manager
  try{
    MailApp.sendEmail({to:mgrEmail,subject:subject,htmlBody:body,attachments:attachments,name:COMPANY_NAME});
    Logger.log('Manager email SENT to '+mgrEmail+' with '+attachments.length+' attachments');
  }catch(e){
    Logger.log('Manager email FAILED: '+e);
    try{MailApp.sendEmail({to:mgrEmail,subject:subject+' [NO ATT]',htmlBody:body,name:COMPANY_NAME})}catch(e2){}
  }

  // Send copy to Accounts
  try{
    MailApp.sendEmail({to:ACCOUNTS_EMAIL,subject:'[Copy] '+subject,htmlBody:body,attachments:attachments,name:COMPANY_NAME});
    Logger.log('Accounts copy SENT with '+attachments.length+' attachments');
  }catch(e){
    Logger.log('Accounts email error: '+e);
    try{MailApp.sendEmail({to:ACCOUNTS_EMAIL,subject:'[Copy] '+subject,htmlBody:body,name:COMPANY_NAME})}catch(e2){}
  }
  Logger.log('=== EXPENSE EMAIL END ===');
}

// ================================================================
// SUBMIT EXPENSES
// ================================================================
function serverSubmitBatchExpenses(rows,engInfo){
  try{
    var sheet=SH('Expenses');var batchId=ID('BATCH');
    var ok=0,fail=0,total=0,emailData={};

    for(var i=0;i<rows.length;i++){
      var r=rows[i];
      if(!r.project||!r.date||!r.categoryHead||!r.amount){fail++;continue}
      var mgr=PROJECT_MANAGERS[r.project];if(!mgr){fail++;continue}

      var eid=ID('EXP');var aUrl='',aName='';
      if(r.attachment&&r.attachment.data){
        try{var sv=saveFile(r.attachment,eid);aUrl=sv.url;aName=sv.name}
        catch(e){Logger.log('File save err: '+e)}
      }

      var desc=(r.categoryHead==='Conveyance')?
        (r.fromLocation||'')+' to '+(r.toLocation||''):(r.description||'');

      sheet.appendRow([eid,engInfo.id,engInfo.name,engInfo.email,r.project,mgr,
        r.date,r.categoryHead,r.categorySubHead||'',r.fromLocation||'',r.toLocation||'',
        desc,Number(r.amount),aUrl,aName,'Submitted',NOW(),'','','',batchId]);
      CLR(sheet,sheet.getLastRow(),'#FFFDE7');
      ok++;total+=Number(r.amount);

      if(!emailData[mgr])emailData[mgr]={};
      if(!emailData[mgr][r.project])emailData[mgr][r.project]=[];
      emailData[mgr][r.project].push({
        date:r.date,categoryHead:r.categoryHead,categorySubHead:r.categorySubHead||'',
        fromLocation:r.fromLocation||'',toLocation:r.toLocation||'',
        description:desc,amount:r.amount,attachUrl:aUrl
      });
    }

    // Send emails per project per manager
    for(var me in emailData){
      for(var proj in emailData[me]){
        try{sendExpenseEmail(engInfo,emailData[me][proj],proj,me)}
        catch(e){Logger.log('Email err for '+proj+': '+e)}
      }
    }
    try{serverDeleteDraft(engInfo.id)}catch(e){}
    LOG(engInfo.id,engInfo.name,'Engineer','SUBMIT',ok+' exp Rs.'+total);
    return{success:true,message:ok+' expense(s) submitted!'+(fail>0?' ('+fail+' skipped)':''),successCount:ok,totalAmount:total};
  }catch(e){Logger.log('Submit batch: '+e);return{success:false,message:e.toString()}}
}

// ================================================================
// SUBMIT WORK APPROVAL
// ================================================================
function serverSubmitApproval(data){
  try{
    var sheet=SH('WorkApprovals');var id=ID('APV');
    var mgr=PROJECT_MANAGERS[data.project];
    if(!mgr)return{success:false,message:'Invalid project!'};

    var aUrl='',aName='';
    if(data.attachment&&data.attachment.data){
      var sv=saveFile(data.attachment,id);aUrl=sv.url;aName=sv.name;
    }

    sheet.appendRow([id,data.engineerId,data.engineerName,data.engineerEmail,
      data.project,mgr,data.date,Number(data.amount),data.description,
      aUrl,aName,'Pending',NOW(),'','','']);
    CLR(sheet,sheet.getLastRow(),'#FFFDE7');

    var mn=MANAGER_CREDENTIALS[mgr]?MANAGER_CREDENTIALS[mgr].name:'Manager';
    var att=[];
    if(aUrl){try{var bl=getBlobFromDrive(aUrl);if(bl)att.push(bl)}catch(e){}}

    var body=eHdr()+
      '<div style="padding:20px">'+
      '<div style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:12px;border-radius:8px;margin-bottom:14px">'+
      '<h2 style="color:#2e7d32;margin:0;font-size:15px">Work Approval Request</h2>'+
      '<p style="color:#1b5e20;margin:4px 0 0;font-size:11px">Dear <b>'+mn+'</b>, please review.</p></div>'+
      '<table style="width:100%;border-collapse:collapse">'+
      '<tr style="background:#f0f8ff"><td style="padding:9px;font-weight:700;width:120px">ID</td><td style="padding:9px">'+id+'</td></tr>'+
      '<tr><td style="padding:9px;font-weight:700">Engineer</td><td style="padding:9px;font-weight:600">'+data.engineerName+' ('+data.engineerId+')</td></tr>'+
      '<tr style="background:#f0f8ff"><td style="padding:9px;font-weight:700">Project</td><td style="padding:9px;color:#0080B3;font-weight:700;font-size:14px">'+data.project+'</td></tr>'+
      '<tr><td style="padding:9px;font-weight:700">Date</td><td style="padding:9px">'+data.date+'</td></tr>'+
      '<tr style="background:#f0f8ff"><td style="padding:9px;font-weight:700">Amount</td><td style="padding:9px;font-size:20px;font-weight:800;color:#0080B3">Rs.'+Number(data.amount).toLocaleString()+'</td></tr>'+
      '<tr><td style="padding:9px;font-weight:700">Description</td><td style="padding:9px">'+data.description+'</td></tr>'+
      '<tr style="background:#f0f8ff"><td style="padding:9px;font-weight:700">Attachment</td><td style="padding:9px">'+(aUrl?'<a href="'+aUrl+'" style="color:#00BFFF">View File</a>':'None')+'</td></tr>'+
      '</table>'+dashBtn()+'</div>'+eFtr();

    var sub='[VT] Work Approval | '+data.project+' | '+data.engineerName+' | Rs.'+Number(data.amount).toLocaleString();
    try{MailApp.sendEmail({to:mgr,subject:sub,htmlBody:body,attachments:att,name:COMPANY_NAME})}catch(e){Logger.log('Apv mgr mail: '+e)}
    try{MailApp.sendEmail({to:ACCOUNTS_EMAIL,subject:sub,htmlBody:body,attachments:att,name:COMPANY_NAME})}catch(e){}

    LOG(data.engineerId,data.engineerName,'Engineer','SUBMIT_APV',id);
    return{success:true,message:'Work approval submitted!'};
  }catch(e){return{success:false,message:e.toString()}}
}

// ================================================================
// MANAGER ACTION (Approve/Reject Work Approval)
// ================================================================
function serverManagerAction(itemId,action,type,managerName,remarks){
  try{
    var sheet=SH('WorkApprovals');
    var data=sheet.getDataRange().getValues();var tr=-1;
    for(var i=1;i<data.length;i++){if(String(data[i][0])===String(itemId)){tr=i+1;break}}
    if(tr===-1)return{success:false,message:'Not found!'};

    var row=data[tr-1];
    sheet.getRange(tr,12).setValue(action);sheet.getRange(tr,14).setValue(NOW());
    sheet.getRange(tr,15).setValue(managerName);sheet.getRange(tr,16).setValue(remarks||'');
    CLR(sheet,tr,action==='Approved'?'#e8f5e9':'#ffebee');

    var ok=action==='Approved';var color=ok?'#2e7d32':'#c62828';
    var engEmail=String(row[3]);var project=String(row[4]);var amount=row[7];
    var desc=String(row[8]);var attUrl=String(row[9]);

    var att=[];
    if(attUrl&&attUrl!==''&&attUrl!=='undefined'){
      try{var bl=getBlobFromDrive(attUrl);if(bl)att.push(bl)}catch(e){}
    }

    var body=eHdr()+
      '<div style="padding:20px;text-align:center">'+
      '<h2 style="color:'+color+';font-size:24px;margin-bottom:8px">'+(ok?'APPROVED':'REJECTED')+'</h2>'+
      '<p style="color:#555;margin-bottom:16px">Reviewed by <b>'+managerName+'</b></p>'+
      '<table style="width:100%;border-collapse:collapse;text-align:left">'+
      '<tr style="background:#f0f8ff"><td style="padding:9px;font-weight:700">Project</td>'+
        '<td style="padding:9px;color:#0080B3;font-weight:700">'+project+'</td></tr>'+
      '<tr><td style="padding:9px;font-weight:700">Amount</td>'+
        '<td style="padding:9px;font-size:18px;font-weight:800">Rs.'+Number(amount).toLocaleString()+'</td></tr>'+
      '<tr style="background:#f0f8ff"><td style="padding:9px;font-weight:700">Description</td>'+
        '<td style="padding:9px">'+desc+'</td></tr>'+
      '<tr><td style="padding:9px;font-weight:700">Status</td>'+
        '<td style="padding:9px;font-weight:700;color:'+color+'">'+action+'</td></tr>'+
      (remarks?'<tr style="background:#f0f8ff"><td style="padding:9px;font-weight:700">Remarks</td>'+
        '<td style="padding:9px;color:'+color+'">'+remarks+'</td></tr>':'')+
      '</table>'+dashBtn()+'</div>'+eFtr();

    // Email to engineer
    try{MailApp.sendEmail({to:engEmail,subject:'[VT '+action+'] Work Approval | '+project+' | Rs.'+amount,htmlBody:body,name:COMPANY_NAME})}catch(e){}
    // Email to accounts with attachment
    try{MailApp.sendEmail({to:ACCOUNTS_EMAIL,subject:'[VT '+action+'] '+project+' | '+String(row[2])+' | Rs.'+amount,htmlBody:body,attachments:att,name:COMPANY_NAME})}catch(e){}

    LOG(managerName,managerName,'Manager',action,'APV '+itemId);
    return{success:true,message:'Work approval '+action.toLowerCase()+'!'};
  }catch(e){return{success:false,message:e.toString()}}
}

// ================================================================
// GET EXPENSES (Date range filter ke saath)
// ================================================================
function serverGetExpenses(role,engineerId,managerEmail,statusFilter,projectFilter,startDate,endDate){
  try{
    var data=SH('Expenses').getDataRange().getValues();var res=[];
    for(var i=1;i<data.length;i++){
      var r=data[i];if(!r[0])continue;
      var item={
        id:String(r[0]),engineerId:String(r[1]),engineerName:String(r[2]),
        engineerEmail:String(r[3]),project:String(r[4]),managerEmail:String(r[5]),
        date:FDATE(r[6]),categoryHead:String(r[7]),categorySubHead:String(r[8]),
        fromLocation:String(r[9]),toLocation:String(r[10]),description:String(r[11]),
        amount:Number(r[12])||0,attachmentUrl:String(r[13]),attachmentName:String(r[14]),
        status:String(r[15]),submittedAt:String(r[16]),batchId:String(r[20]||'')
      };
      var inc=false;
      if(role==='engineer'&&item.engineerId===engineerId)inc=true;
      if(role==='manager'&&item.managerEmail===managerEmail)inc=true;
      if(role==='accounts')inc=true;
      if(inc&&statusFilter&&statusFilter!==''&&statusFilter!=='all'&&item.status!==statusFilter)inc=false;
      if(inc&&projectFilter&&projectFilter!==''&&projectFilter!=='all'&&item.project!==projectFilter)inc=false;
      // Date range filter
      if(inc&&startDate&&startDate!==''){if(item.date<startDate)inc=false}
      if(inc&&endDate&&endDate!==''){if(item.date>endDate)inc=false}
      if(inc)res.push(item);
    }
    res.reverse();return{success:true,expenses:res};
  }catch(e){return{success:false,expenses:[],message:e.toString()}}
}

// ================================================================
// GET APPROVALS
// ================================================================
function serverGetApprovals(role,engineerId,managerEmail,statusFilter){
  try{
    var data=SH('WorkApprovals').getDataRange().getValues();var res=[];
    for(var i=1;i<data.length;i++){
      var r=data[i];if(!r[0])continue;
      var item={
        id:String(r[0]),engineerId:String(r[1]),engineerName:String(r[2]),
        engineerEmail:String(r[3]),project:String(r[4]),managerEmail:String(r[5]),
        date:FDATE(r[6]),amount:Number(r[7])||0,description:String(r[8]),
        attachmentUrl:String(r[9]),attachmentName:String(r[10]),status:String(r[11]),
        submittedAt:String(r[12]),actionAt:String(r[13]),actionBy:String(r[14]),
        remarks:String(r[15]||'')
      };
      var inc=false;
      if(role==='engineer'&&item.engineerId===engineerId)inc=true;
      if(role==='manager'&&item.managerEmail===managerEmail)inc=true;
      if(role==='accounts')inc=true;
      if(inc&&statusFilter&&statusFilter!==''&&statusFilter!=='all'&&item.status!==statusFilter)inc=false;
      if(inc)res.push(item);
    }
    res.reverse();return{success:true,approvals:res};
  }catch(e){return{success:false,approvals:[],message:e.toString()}}
}

// ================================================================
// DASHBOARD STATS - Sirf Work Approval ke stats
// ================================================================
function serverGetDashboardStats(role,engineerId,managerEmail){
  try{
    var eR=serverGetExpenses(role,engineerId,managerEmail,'','','','');
    var aR=serverGetApprovals(role,engineerId,managerEmail,'');
    var exp=eR.expenses||[];var apv=aR.approvals||[];

    var s={
      totalExpenses:exp.length,totalExpAmt:0,
      totalApprovals:apv.length,
      pendingApprovals:0,approvedApprovals:0,rejectedApprovals:0,
      pendingApvAmt:0,approvedApvAmt:0
    };

    for(var i=0;i<exp.length;i++)s.totalExpAmt+=Number(exp[i].amount)||0;
    for(var j=0;j<apv.length;j++){
      var a=Number(apv[j].amount)||0;
      if(apv[j].status==='Pending'){s.pendingApprovals++;s.pendingApvAmt+=a}
      if(apv[j].status==='Approved'){s.approvedApprovals++;s.approvedApvAmt+=a}
      if(apv[j].status==='Rejected')s.rejectedApprovals++;
    }

    var ps={},es={};
    for(var pk in PROJECT_MANAGERS){
      var pe=[];for(var x=0;x<exp.length;x++){if(exp[x].project===pk)pe.push(exp[x])}
      var pt=0;for(var y=0;y<pe.length;y++)pt+=Number(pe[y].amount)||0;
      ps[pk]={total:pe.length,totalAmount:pt};
    }
    for(var ek in ENGINEERS){
      var ee=[];for(var m=0;m<exp.length;m++){if(exp[m].engineerId===ek)ee.push(exp[m])}
      if(ee.length>0){var et=0;for(var n=0;n<ee.length;n++)et+=Number(ee[n].amount)||0;
        es[ek]={name:ENGINEERS[ek].name,total:ee.length,totalAmount:et}}
    }

    return{success:true,stats:s,projectStats:ps,engineerStats:es,
      recentExpenses:exp.slice(0,10),recentApprovals:apv.slice(0,10)};
  }catch(e){return{success:false,message:e.toString()}}
}

// ================================================================
// EXPORT CSV
// ================================================================
function serverExportCSV(type,role,engineerId,managerEmail,statusFilter,projectFilter,startDate,endDate){
  try{
    var csv='';
    if(type==='expenses'){
      var items=(serverGetExpenses(role,engineerId,managerEmail,statusFilter,projectFilter,startDate||'',endDate||'').expenses)||[];
      csv='"#","Date","Engineer","ID","Project","Category","Sub","From","To","Desc","Amount","Status","Submitted"\n';
      for(var i=0;i<items.length;i++){var e=items[i];
        csv+='"'+(i+1)+'","'+e.date+'","'+e.engineerName+'","'+e.engineerId+'","'+e.project+
          '","'+e.categoryHead+'","'+e.categorySubHead+'","'+(e.fromLocation||'')+
          '","'+(e.toLocation||'')+'","'+(e.description||'').replace(/"/g,"'")+
          '","'+e.amount+'","'+e.status+'","'+e.submittedAt+'"\n';
      }
    }else{
      var items2=(serverGetApprovals(role,engineerId,managerEmail,statusFilter).approvals)||[];
      csv='"#","Date","Engineer","ID","Project","Amount","Desc","Status","By","Remarks"\n';
      for(var j=0;j<items2.length;j++){var a=items2[j];
        csv+='"'+(j+1)+'","'+a.date+'","'+a.engineerName+'","'+a.engineerId+'","'+a.project+
          '","'+a.amount+'","'+a.description.replace(/"/g,"'")+'","'+a.status+
          '","'+(a.actionBy||'')+'","'+(a.remarks||'')+'"\n';
      }
    }
    return{success:true,csv:csv,fileName:'VT_'+type+'_'+TODAY()+'.csv'};
  }catch(e){return{success:false,message:e.toString()}}
}

// ================================================================
// PAYMENT EMAIL - Accounts se Engineer ko payment mail
// ================================================================
function serverSendPayment(toEmail,amount,utrNumber,customMessage,engineerName){
  try{
    Logger.log('Payment email to: '+toEmail+' Amt: '+amount+' UTR: '+utrNumber);
    var body=eHdr()+
      '<div style="padding:20px">'+
      '<div style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:14px;border-radius:8px;margin-bottom:16px;text-align:center">'+
      '<h2 style="color:#2e7d32;margin:0;font-size:20px">Payment Processed</h2>'+
      '<p style="color:#1b5e20;margin:5px 0 0;font-size:11px">Your payment has been processed by Accounts Department</p></div>'+
      '<table style="width:100%;border-collapse:collapse">'+
      '<tr style="background:#f0f8ff"><td style="padding:10px;font-weight:700;width:130px">Paid To</td>'+
        '<td style="padding:10px;font-weight:600">'+(engineerName||toEmail)+'</td></tr>'+
      '<tr><td style="padding:10px;font-weight:700">Email</td>'+
        '<td style="padding:10px">'+toEmail+'</td></tr>'+
      '<tr style="background:#f0f8ff"><td style="padding:10px;font-weight:700">Amount Paid</td>'+
        '<td style="padding:10px;font-size:24px;font-weight:800;color:#2e7d32">Rs.'+Number(amount).toLocaleString()+'</td></tr>'+
      '<tr><td style="padding:10px;font-weight:700">UTR / Reference No.</td>'+
        '<td style="padding:10px;font-weight:700;font-size:16px;color:#1a237e;letter-spacing:1px">'+utrNumber+'</td></tr>'+
      (customMessage?'<tr style="background:#f0f8ff"><td style="padding:10px;font-weight:700">Message</td>'+
        '<td style="padding:10px">'+customMessage+'</td></tr>':'')+
      '<tr><td style="padding:10px;font-weight:700">Paid By</td>'+
        '<td style="padding:10px">Accounts Department - VISHAL TECHNOPOWER</td></tr>'+
      '<tr style="background:#f0f8ff"><td style="padding:10px;font-weight:700">Date & Time</td>'+
        '<td style="padding:10px">'+NOW()+'</td></tr>'+
      '</table>'+
      '<div style="background:#fff3e0;border-radius:8px;padding:10px;margin-top:14px;text-align:center">'+
      '<p style="margin:0;font-size:11px;color:#e65100">Please verify this payment in your bank account within 24 hours.</p></div>'+
      dashBtn()+'</div>'+eFtr();

    MailApp.sendEmail({
      to:toEmail,
      subject:'[VT Payment] Rs.'+Number(amount).toLocaleString()+' | UTR: '+utrNumber,
      htmlBody:body,
      name:COMPANY_NAME
    });
    LOG('ACCOUNTS','Accounts','Accounts','PAYMENT_SENT','Rs.'+amount+' UTR:'+utrNumber+' to:'+toEmail);
    Logger.log('Payment email SENT to: '+toEmail);
    return{success:true,message:'Payment email sent to '+toEmail+'!'};
  }catch(e){
    Logger.log('Payment email ERROR: '+e.toString());
    return{success:false,message:'Email failed: '+e.toString()};
  }
}

// ================================================================
// TRIGGERS - Daily Report
// ================================================================
function setupTriggers(){
  ScriptApp.getProjectTriggers().forEach(function(t){ScriptApp.deleteTrigger(t)});
  ScriptApp.newTrigger('sendDailyReport').timeBased().everyDays(1).atHour(20).create();
  Logger.log('Triggers set!');
}
function sendDailyReport(){
  try{
    var data=SH('Expenses').getDataRange().getValues();
    var td=TODAY(),cnt=0,total=0;
    for(var i=1;i<data.length;i++){if(FDATE(data[i][6])===td){cnt++;total+=Number(data[i][12])||0}}
    MailApp.sendEmail({to:ACCOUNTS_EMAIL,
      subject:'[VT Daily] '+td+' | '+cnt+' exp | Rs.'+total.toLocaleString(),
      htmlBody:'<h2>Daily: '+td+'</h2><p>'+cnt+' expenses Rs.'+total.toLocaleString()+'</p>',
      name:COMPANY_NAME});
  }catch(e){}
}

// ================================================================
// TEST - Excel Test Karo (Execution Log mein dekho)
// ================================================================
function testExcel(){
  Logger.log('=== EXCEL TEST START ===');
  var blob=createExcelReport(
    {id:'VT001',name:'SUJIT VAL'},
    [{date:'2025-07-20',categoryHead:'Conveyance',categorySubHead:'Auto',fromLocation:'Delhi',toLocation:'Noida',description:'',amount:500,attachUrl:''},
     {date:'2025-07-21',categoryHead:'Material',categorySubHead:'SOR Item',fromLocation:'',toLocation:'',description:'Cable purchase',amount:2000,attachUrl:''}],
    'IOCL Moradabad'
  );
  if(blob){
    Logger.log('TEST PASSED! Excel Name: '+blob.getName()+' Size: '+blob.getBytes().length+' bytes');
    return 'Excel OK: '+blob.getName()+' ('+blob.getBytes().length+' bytes)';
  }else{
    Logger.log('TEST FAILED! Excel is null');
    return 'FAILED - check execution log for details';
  }
}
