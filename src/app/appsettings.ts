export class AppSettings {
    // *******************************************************************************************************************
    // *******************************************************  MySQL API Endpoints: *************************************
    // *******************************************************************************************************************

    //public static DOC_LIST_API_ENDPOINT='https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/documents';
    
    //DocDetails:
    //public static DOC_DETAILS_API_ENDPOINT='https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/details';
    //public static COLUMNID_API_ENDPOINT = 'https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/columnid';
    
    //Properties:
    //public static AUDITORS_LIST_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/auditors";
    //public static CURRENCY_LIST_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/currency";
    //public static REPORT_TYPES_LIST_API_ENDPOINT = 'https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/reportTypes';
    //public static MULTIPLIERS_LIST_API_ENDPOINT = 'https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/multipliers';
    //public static SOURCE_TYPES_LIST_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/sourcetypes";
    //public static PRINCIPLE_TYPE_LIST_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/principletypes";
    //public static PPREVIOUS_REPORTS_LIST_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/previousReports";
    //public static WELLS_PERIODS_LIST_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/wellsPeriods";
    //public static DOCUMENT_HEADER_LIST_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/documentHeader";
    
    //Chart Tree:
    //public static COMPANY_ACCOUNT_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/companyaccountorder";
    //public static CHART_ACCOUNT_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/chartaccountorder";
    //public static CHARTID_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/charttree";
    //public static CHART_CODES_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/chartcodes";
    //public static CHARTCODE_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/chartcode";
    //public static QUARTERLY_CHARTACCOUNT_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/quarterlychartaccountinfo";
    //public static ANNUAL_CHARTACCOUNT_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/annualchartaccountinfo";
    //public static CHARTACCOUNT_DLG_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/chartaccountdlg";

    //Save Button:
    //public static STATUS_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/status";

    // *******************************************************************************************************************
    // *******************************************************  Oracle API Endpoints: ************************************
    // *******************************************************************************************************************

    //ptmAPI-lookup:
    public static STATUS_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getDocumentStatus";
    public static AUDITORS_LIST_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getAuditors";
    public static CURRENCY_LIST_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getCurrencies";
    public static MULTIPLIERS_LIST_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getMultipliers";
    public static REPORT_TYPES_LIST_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getReportTypes";
    public static SOURCE_TYPES_LIST_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getSourceTypes";
    public static PRINCIPLE_TYPE_LIST_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getPrincipalTypes";
    public static PPREVIOUS_REPORTS_LIST_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getPreviousReports";
    public static WELLS_PERIODS_LIST_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getWellsReports";
    public static DOCUMENT_HEADER_LIST_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getDocumentHeader";
   
    //ptmAPI-document:
    public static DOC_LIST_API_ENDPOINT='https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getDocumentList';
    public static DOC_DETAILS_API_ENDPOINT='https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getDocumentDetails';
    public static COLUMNID_API_ENDPOINT = 'https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getColumnID';

    //ptmAPI-chart:
    public static COMPANY_ACCOUNT_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getCompanyAccountOrder";
    public static CHART_ACCOUNT_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getChartAccountOrder";
    public static CHARTID_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getChartIDList";
    public static CHARTACCOUNT_DLG_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getChartAccountDlg";
    public static CHART_CODES_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getChartCodes";
    public static CHARTCODE_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getChartCode";
    public static QUARTERLY_CHARTACCOUNT_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getQuarterlyChartAccount";
    public static ANNUAL_CHARTACCOUNT_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getAnnualChartAccount";

    //ptmAPI-save:
    public static VALUEORDER_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getDocumentValueOrder";
    public static SAVE_DETAILS_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/saveDocumentDetails";
    public static SAVE_HEADER_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/saveDocumentHeader";
    
    public static DELETE_VALUE_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/deleteValue";
    public static INSERT_VALUE_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/insertValue";

}