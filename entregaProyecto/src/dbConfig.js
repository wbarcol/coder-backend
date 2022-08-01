
//IMPORT
import dotenv from "dotenv";
dotenv.config();

//CONFIG
export default {
  mongo: {
    connectionString: process.env.CONFMONGO,
  },

  firebase: { 
    type: "service_account",
    project_id: "coderbk-94109",
    private_key_id: "41afabab1f560d04630efebe3469a98871bb1ac5",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCYe4xlRM9npBvU\nJRCLGFggHmQhDdZVZUau0W+RVasTRcxvMrdxtEHM/liicHwi98QJWc0HitXBVGr5\nr4LvEqi73fHdF/ib1JjSsm9hLbHhP2SjTh9omkBsKJpyZa0W9vw/RNGewOWv1/kS\nqruDGaG4iuLD4Orc0jcgAhO0yl06Cqf7o+pBVJmj6Bb2mXwfUYmZQkEJcJ+i2VGW\nJVJ8vjaPbZi7v+XZmMqdStKR7Mu4IaDHEBhiKB+MQ/Towt3YWc5HzM6BV6NmiRoN\nLw+AkM3SVKmUIqo9fNvWAaTAWpQmuaLdrxRxKfrSDa+l9iF9UcHRnDmvNLPqkd3E\nLWNNdqP9AgMBAAECggEAGBdpGrTw+gSFOxLyFq/teIGku042334lWUiQ0osRAPYF\ns0n1jtr2jH9hHKUeD95KlFmiWb83P5jpX/K5grFVhH0wEgkQB/rifGOh0l5IXPjJ\nmz2kG8BHTm9p24ox+09hklN6tRTwFUTPvwHHp5J8qS4UXvNh2CrEd+OsHmPcr+cx\npnrnkhQqxeopOeYI6XrZfGGxo5WKg3NhDqf6HsJ9tUZR0Ct3y0FvZoVZj6NNk2fa\nyGJyS0Oa7zyqz7J/v0I5qhNlSuKv2IaeVOF+02Zjx4vnYDgi5xP6evFaYIw2F11b\n9MQK7L+KPHGWb2Wudrmp71o5/wAo4jh4LnC6vum9EQKBgQDLjjDSKyqcZzpzHZ5c\nvyh+1e/QjImskZ89q1S1I4b/i2RC6Ip0Oq35SLA4kDx18Ph5XVV+6te9+v5vH8T/\nYSlEqTBRmqh9lMdXrRRHu600QhJDWAzUdT8dB7LDKGheTejelaUDtfBwjaHA203R\nN7CawWP5dEd7MPT7vu2Ro2bryQKBgQC/xMWVPNNmDO0mvrSqRazIRpADTUSM6OfJ\nB1t+CunX5c+tgeLUu2F5efeliloB7EKaKVSsFw4qorlQbDV5QNw7b687Sku9sNzy\nQ9M81nMnGFVQlhD8e0rF8MoLyWdF3azGDvPiNPCOe6iLqbXgu+dgOUs+CVohtdvF\nCMygm/golQKBgQDIEHgBiTW3RWpYTEsiwystBl5PLmH+P54wgZ2e7003Cyy+6kly\nlV36viudXH5gOTguKMLoHC9xZSj/1UzM6BUki9mWyxhBXaJTlSRyoI5K54mFsRvj\nEV23zaIwWB3EWnS/mHr4W7D3Hu1VXPZt5HtqjxsQye2bsfGHIQ/kbaKxqQKBgA0/\n2ybkfPagDgKPSow5JCbyOSEBRas2rE0HZRrgRifUiPTD9JgeGi36b1HQrUdUu4VL\nNb5uGVx4wbT8xPULtiulG8ZM686/WYSjiwS5DFu3Iq3esG3BVvk2Gb+WurvpBPbq\nMY9/eN9fS9Xac+aDFQlg7AHtQ3zww65pXTn7jLnBAoGAHZSI72G/lGFgUVwTd6Yb\npcVHfRIbC09dci2vcrzTgW1nj6KOKx17pQnZUf5/szpT6OnvPYsJtch+q30GSVLZ\nxM4eAkIz9Q0VVjfnJbz+U3EBGaOR5dRZrb3+JHtn5++hv5rhN2tSApMFFBMyl7mV\nDTWictbDj+hbnsp7ZLR9ntY=\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-lkk28@coderbk-94109.iam.gserviceaccount.com",
    client_id: "114442029232287261610",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-lkk28%40coderbk-94109.iam.gserviceaccount.com"
  },
};