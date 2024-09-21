export interface ManualFormData {
    shopName: string;
    businessType: 'retail' | 'wholesale' | 'services' | 'manufacturing';
    shopAddress: string;
    username: string;
    merchantId: string;
    email: string;
    mobile: string;
}