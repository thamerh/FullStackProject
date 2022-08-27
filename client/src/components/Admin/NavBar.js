import React from "react";
import { CDBNavbar, CDBInput } from "cdbreact";
import { Header } from "./Navbar.Style";

const Navbar = () => {

	return (
        <Header >
      
          <CDBNavbar dark expand="md" scrolling className="justify-content-start" style={{background:"#333" , color:"#fff"}}>
            <div className="ml-auto">
              <i className="fas fa-bell"></i>
              <i className="fas fa-comment-alt mx-4"></i>
               <a href="/dashboardAdmin"><img alt="panelImage" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8BAQEAAAD4+Pj39/f7+/v09PQbGxvk5OTr6+sUFBSxsbEICAhCQkIYGBjPz88PDw/AwMA+Pj6kpKQhISHX19e6urp+fn6Hh4cvLy83NzehoaFFRUUoKCiWlpZzc3OOjo5MTExgYGBWVlbb29vGxsZvb2+BgYFkZGSLi4tZWVnfprLJAAAVsElEQVR4nO1dCXPrqg5OsCH77jaJs7a96fb/f+BDAts4MVgQO+m8OZo7vT1NbPGBEEJIqNP5R//oH/2j55EQT2UfxW1z4INB2yycNOi3zIBHzx3CeMBb5hBFvG0WTvY8apm94IIHTYQ4iuG/O9lH8j1BEONYSPZR7fe4EDxsCGMey0ejsN4p3iJ4mAhJxjGXCOtmGLxeDmEAixjaJTs/vguiYh/2IMyvevaRJNmN/qomziXrHohyDkr+Aezlg/lvTvZyoOVYyG705RAjB65/D9XFHHQA5/66NOaR8budvUQvok6IkMII8hi6v46HiyS+GH7Ua4tr9iCiUs2pkXHMxUi2TIQImeKAjSz+7U3IPmQWRjn7WLO39JHsBPn62L//5eTJJLSj3h15DwOIKKyEsb8AKfa8lr2UTbmcBNmEuLzol8a4LgYsaCKC6RGixRGhZh+hKFSLUIT6JYQDjH4+hrKbJGL/IYS5G9nly/2sMYYRqKqql4B0yC+KMIQoFbH6jefcvBop1VQEP4PZi4J95UsEaIc41ORSoi2k3SR40CSU0x+ELdAgVf0i2eMktqmqGCZ6qMWdT15h7cK6RiL7oBE02NsFSJqsHRDRMAYASj3KwwDGaG2JEAVMZC+NXYnunl1BFGXL0U0X8ngwex2tjpv16XRab46r0WI2KE13kO64E6J/C/aIK7IClJZox9+QKPNA6Y/Kc7C/OH7vx6yKxvvv46KPmIRAFde5pwGqhyPLHIRVkEcBC32ZB7y8UPaDxeYth9O9pvyTt82ir56+l30U200pNOaD50BOIOmKQ/T61TOQVY6h8VG6vkgFde+2Xo6RdTGFpbYJvwXHiTxYfWQQMjSH39PXcbcaAa12x6/Tx6EAyrqJ/P9pd7fvizsWU9n5YQv9DYnVRLcbKfk+L2bV4jeYLc7fCX5rnrBU/m+/atH/1ZBv7fJrwPs4zup1czw7woj3tDZ6vzTSjpZI7JIc3v48o8sEn52LgU/aHMi7qP+FjcTBW/lPKT158flN2+7gEOqfsuYtA+ApGqyWGcjTX8M4yPGtX+560cs6x/jcU4UyRRs9h+YNTCGxmusJ+fNMr3uJVhpf+trQC1+3GuOooRfeRy+6OWmTan6R6pfeJ/NNEF+raZM0NX4ZvSYK49eTRfUyVGph1cK7d6rverMW3k2mternUztLtNAK+quVt1Oon2IDtu118myLHNInLY4jNYA/rTL5UUyeolTXagDbVnYvB+SzbpnNLYkJMj49gNUJOe0fbI73lfA0vURU06ti9tDJeMFuPTyKZz9BiA9cNkYI8P1xDPk7cnyMyHRwKZbszo9ih/SDPNswLCroiMwerb+V3BwfweqMrB7vTbk8CuKRgS/mGSb/DHxy7UMEc7jH/mubTSW9sPGw9bmoZsNzAHY6/6G/sVWNenkqQBhF1u662EcGz9x2z7AFrVka4kla1CQlRW3ZqJNnrIPXhJpg386714+3ZKroB72ybbwZO++BtqiV3lsyUVHLHJp/rz/xpB1tk8Jr/4ajHTs7bfqt64fuXmroFc+nmn0nrkOPcFnQ6NT4ws+H8pXbJt94H/GDbE+vSW/4ujFbZjVuRLrQfGvQU/wCct+EX3QAx7zbJuzaTbP247YhGV3ow8+d/SuX14Kc9uGhSX26amZe85MOEmLs17bszEohRS6IqPsaMiGjMD16rQdekjz0SzZ+Uf3QwowOcwNAfdqMstkEWfPxoByddCyFtknLsrJxHghxp2NXDgN6iwfwJn/XgSgJYn9yFbvH2KFK4XggRIeK1coSA3ocKRziJeRva+LlKMARYzfBiZUKZ2F+r26agX1q2WS4ouGvMxHQCPQ216LIyCqKP4x2G79VnLYszLDFOoSvVgs8gtwdy1NC9n4cGbHQpxCtDMlZ+SsuJj7GSv+6VjiLwzLtbdMhoyDE3UClCoScDcs8hJQuDHfP2odD6Om44JjPkfXhugTpU2xK/z6VFA6XvZFsk+lyyigIccRvB1HEUn7sALNfdAO//IcQxi/PfFGxKPkAgrhfuuafDoZhEqldA2NzhFi/3IEpcmMFRhyjgSt1tRFIriEKZl+7bBRDwLZQye7H0oC9Kc0n3kt/zb3YkvtCx93Ol0PKgo4dcjVaEYSrR3FlZhOiyqJslaDuJJ+hJ0CJTfYhDOHgrRqKjqK6Ag7sF2w+ziESTJbxzUqG7KPqmHEUUfhAZ/AB3sQ7ViaKVHIfVz1c4EhQHP87ovmHYRxl4cUg7MV2Mjngke9YQqxHCGtiybUi2x4LSwprVCSf6Qy+CNSgpzmDOdgCRIR/llUKfiylVm96ygrnk6tUkItEuE/UKKYEhDiLDJMZMvswUbrqyzpboVP8jDq/9jXVAhASUwR00aykT5Q6HqjwBmXNzEoQ59hMRDhJUdtMKQhxMSscgBitLmx5MVGRxBuBNEuhxR7y2YTJ8ZMTEN5UHqJ3ZDnK9xZozUTfpe/g3zKESZJMxhSEL6aUyTUK0t+s9gw0TIFHNSGlBhSCz1IhEJ1UZf3yGoEtjQsNKpWL0JCLryX7QS6ly/1eAiRtjtJC50JWJyQ+2ixSdU+D6OhFAzpi72VzwxSQk1lO9LKqTFFVXsZl0waXoEGhcCAbYYSaZsvSyWQ5Jm7/QNu/4W+R7FowNuwZF1rLiCjLHxy4jPcKhGDxyY4Z/JawnPFDU2rV39X26ZxLLoR4f47YcJwBpCHs542MoYtdSdL5bSZxlsAHe/sPMkB8UnbO1RqBGuS/9ApgNw8YmyU6tyZNtNG91ACJW/i3XNDAlOm4Nk1ZBl+c5bd9+AipNGIg9UycymsEvmhXsXnKTYBYrSqsixC7bJsBJCKEcfiVIipVeMRr0if1XQtc5w9GPkIKS5DswVnvZiUvWzZliHtD4Ug5xdCndK8BEhGimKLmJ6RPKlsn07YLj4M6gTMwPpcGUCnM18oBzL6jFM6kgChn4TjLaqM5miDbZgEalJIeCnneufkN24ozFSHM3f7b7QJXsmyqIKrt0zGHOMxGkIzwR9oLG7xyhuK44DzKN8fQoVQforR2+WtJQre4b5uNnQDhm0NUOC89FQ2cFgCpCKVx1DugNUr6eqFsca2geuvk4H+WAKpd208dvm6ucLgKI52bYkBDyBkbswEnAjRo4bVWLJKhYbIM1QZiSQCICgf12avhovFB2IGjgkXATRfgJqWGWPG10TZwVcAfpWUznlPGMLPrBh/lHqEiPAeeJr7Rp+F/2xJAbJjAVMteLUQQTOgUHIJd2W1MRHjJDTcv4tBA2sjvymsEilzmjpjWQJS7JDTQ2FQZPwfzXVOa/ySGpvoj7MuOITmCTdlimdpY5z5P9yhqgN3CgC3bRLQjwqlsq3/kAiiab8L3SjsgluDm9sUYCSfEAiD8PukrxiZEUjLJu7/HswNrMGm9/2ZzA+BaP1qaTdOh3abpjU3dqWdw2XAgWMY/sq2OM0lr07v1bkS52A6LMdCuiut9hHUumiOo//B7o3Ay489FIG+f3gj3BFW6YUMD4HtmRt+OVCXEG4DYS0rhlH0EdT09C1GmHPbY7s6Tm75eBjBb0sR31SJfCbECYLfIo/oyIM6vfP83NACvru9hab0GlqJkAFyiRrgMq62YCkGtBmi8ylhh53XpVfSVraDBtav1isRHCeAZ//hltdJuRtEGsJsrF/FrQKwxr3q+bt2OEm2HVQoLegbQ4aqwQnQALKZ04dBiw3nm+68ksL98Q09eXdEJsA8wAH7iFKh2VRTNLgmqCyC8sotqufD9A0SHwvmkKP4rGjlijiCqwgDodlVUQXSOoP7Gle+fzYeOXMB1QOTJyr6zwKwgDdBwVbjxdQ1BrQdYbKEvJYiJRRTPAQiPVjNhVgDMDqZqXBVXEFnZkrFjVL7/zFWOgmoxP+2ttdPG6kns5yKauyrmJIBaUCkjqCF+lGwIMC8sRsjKw6WUkUOyRyAwOIB0V0XWaDmKVICFHZj5CuS6aDkIc2mNAISdmTr+2ipz/p0OECGSASJGkXUi0tnSopHvKWBHncvZ5+5sdVxpeRn4AITDQ/tOo+rret71j2/Lt6N1J9U8QoO8EEoR7dbt+isR1lAIQvIK44MQ5yDBdxOE0Hce2nVpOMLMJ0OHSEUYokvJK4wPQr0Ounb9YQiPHp7PjBw2TSBCY5mo9cD5IgyxaUZV8VT3ICytg1RBpSIMsUsX1MhnIsKrhZ4IkYowZG9Rsz/0RXjrdCIJKhVhyP6wbo/vh7DK6UQZRSrCkD0+2VNOQVhpi1IgUhGG+GnQ10Y5xCchrLRFCYJKRBjkayP5S2kIrbuJeohEhEH+UprPm4LQ5VWrE1Qiwtcgnzfx3KIWYXH36g3VQyQiDDu3oJ491SBUxna6mN3QZc9qBZWIMOzsiXp+6EaoAFa3c1A/ikSEw6DzQ6oGdiJUc9Cy7HCVcuA+X6Q0XISdAaOdQBj6AXMcD2ZH2JVPcu2QdAgqDWHgOT41FsM1hhBK2a1D2LUc5ihnFwXh2ZnEZic4miBYpk6EXe02rnySu3aJbKxGn4KQKG03BNfdEAwF9zzsBiKUrKdUhF4xlAaJ+MAoubEEq80fobT69QWtBISzsOssBIeULMKaf4UQV/KbiOfKJ+0IJcAlSjgJ4Ya6WS9R3Ik5rPmT2m+WEbI5dP78GnXlk1aEUkT37JBSEU6MaQilAzihxgOPoeCLIMl3CSEbLpNtmqbLUuM9Eco1Zi7fQZXSvhFDGUFdQ0vSU4liVZ6PFOdtIpQA5fBJLTgvQfRDCCK6nKdbKkIV550BxCD82hKjAuNoOSfF6hsI2XSJZ0usW4boiVDK5/bA0gMRYRGrX4ydPatEfVFgdcABJ+VbFAgRYLZpMCH6IJRPJ8tkuUyHxPWwyLcwhdNZAFFIWYYCaMScmRyhEtHhdttDO8aA6IFQiujkkOx7LNHWUC3CPGcGAebVAbl9LsZYnk+lr60IKbIZQgUw2U8m+4OGmDuAPRAe0vkkSSY6LoeAMNXBSgjJqA5oLY0VCcggjFVHUHLXcoQpiOhyAqT6Xw2mD0I4lIRg9kNx4l+HMM9du0kutFScEViINY+Zfq8/tcoRLmV75nsAuJ8C22Ee5U1FCFNwOj6AqsmfrEN4yjbq5fKLUM/WUrhLyK8VpQMJOaQ5wgPodxzCybybLo20AjLCQzqcoD1TPFmDsMghxWVejyG3VQfEDNCoI4waq/V5wMU8hEzAA8zDLVvuJ2beBAmhXEgTlqRsvO0aT9Yg3OU2KSYXFsUJq6t/QWpUVK4OCLpmTkN4wAUsSdOE5dlnXgh7Ur8sh4kZO1aLsGskruFPrCnd6ViSL6BObVwuiI1S4LwV4wohUFoGSEMIMSyT4XaZdktPuhEa+fi5McrtIwhZ0Py6gCUY7s4LlHKE3aXKwb4eQRJCsEXnbCghdstPuhEadypklhovdOo1wAjL810X7sJ7MVye4WLFHy976B/cXwEkIJRadDhNpjCXr550IlyYl5vo9MlC4dwCxNsebjb1dXebGFYbQmS9/RVACsJkngxZb3od3liDcFtazHi2JFYn42Mid1V1wLr7aUzLuyshsunk5iCtDiGbT3t7uU4k7OZJF8IRK39BVwesXumheq+oriB5cruGS7sntkx6NwAJCMe98XK7XXZvn3Qh7F3bI5w7qwNyS21EvCfKfipQ3gF3t9uKk8JahFAdcFuR6eZECGvh1dbHVcMxstcah3MPu2Fz5cWoChQmzEOoDngzgm6E2PNn68eVEG2fMFfUQjO+Ngmx8hDVgfDTelzgTzijbX7FupMZGsJudZC4A+EsT1tsglz3Jg7Y2AFwyhznFnOWd4K1g2wIeaP3JjrvvuSW409NWG7VYtmqMFVmO0Blro0NXgTY4OXwa8dW+LKd9hy0nU5tBaFelkP4gv3Z6cG2EGOweZP37PJemOe8NTpQ8z/J9MfuEf506b5AggsW/sxd0KOmZRQpZXV28MMITeVlO69N/kLdzLbuZP879+r/tjZh8MrrdivlUWgDNkRLJRHByf/0+hYrFhh5QSEBnq0n1yiBbH029r/lg0iqzswz64K2XGcmY/C8Ujqt1wpSmZRPrffUvt2xws3Ac0bxBXcqrdfPO7L5/DlzEfa8SUAcqTcdcd/2eI2KWvQx5QGfU/9w9TiAGbPHWjcb5PmgGpaZRn1/nBnOfx+hRU1S62Ly/1tLVkWxPKxTVXns+YM3p2KPEB/g2MDrDBh7a80WtZKqy31oe/HHG1yfVEH+VUlq4/6SEm2US/lJHiK860AOY3saYKYKqy+f5x/6Uj18aqem5EDNwJalpIZm6trRVqzFnZoFyTP3o0B6GHtNz5RR7w8MoKIXHa+c+qYau2ihQ4TT51XmNSm7y3nb1Di+anxPd3vlxH80xu7ufp0jdvplf6Cqq0GDk1ILUq/eZwK8nHTGBlv/jZKgBfVPWdenu9C29Xdp9pL13zgiKVN/k3U/e1v5N7C/e8uf3/xFfEBidcgbOfmZ1aeuZBTNfpb5k4dVW0WpG6HZN8sEjbGP86W+seJyxMHTD303s8B7lM7zJjFSDZ6q5Ivp+89iVj0xB7PXn/ehRqeke9RQw3xK54XQYPV7E5Px9rk+H1cjoNXxvP5862UfaXTsd9WY9hTVAWyNkrhsDln7MwjXZHy03VwabFMMIXzWTx2FA314wI/B4ufjCk4pGkjTx8/FGLwG2GPRN0e1GYhlJ2TwuSnOIx37l93n27ByDIdvn7tLeV2AlDIIRr+Ht4BiLNb5LDhUFLoXYnTNg8fiZTEa7c6b9Xr9dT6ORouX64jy7EEJUNQnENoJgizjyDYR8w/umqpCiYn/G/LsM0deVh1hqZJYWHKCjBhaVyHPWh5Qns/Gw0EGrpoEQgfzCCr3VdcG1JWssjjTYIgRRIuHCJrKANVz0JlAaCeBFbUqAvKzT7Fml25boKDGmod3/6j8QZ5lvxCSeW8Ji4PGtlDo+Lo6oL28l5NHhDy8ewdF1GQfoOxAciK7BkDRzWrn5X/w5gG6MEjLFNlKSnj85zGWznMshbGJEAsJhihD4GEvz+d6NMpFSNWz9X6JwDpHjucwYy+r7ZiVXvMjKD7o5OEiTAfR7K2pPQ4ScIdAFDnmFoqWyouKwwBGmNjo4uF8Gljn7P01Fazz7t7N6sqptSRkHEQtDwdpYyOzp3xfgjpYuJnn6jmr7+hPwCPYdM6MUR4moqp0nvu5bJGNgkSUxsNBRnFCf4BSLUKGdt1zcdZ9ASMIiYsxgYeDtKVmS69zModbBCirG0KU2iJAi2KV45AV1CAFMfYvoAYmYixI4oMXKoRYa3AViqDxcLEHSQswSGN1awvpu7Bch5ijkGMr7t+fc0cxX9djokN/LrLl6DXIw/Uef1tNsb9XfP4GDxf7BzC/27Xzj/7RP/r/pf8BJT/sxR+AOWsAAAAASUVORK5CYII=" style={{width:"2.5rem",height:"2.5rem", borderRadius:'50%' ,marginRight:'10px'}}/></a>
             
            </div>
          </CDBNavbar>
          </Header>
	);
}

export default Navbar;
