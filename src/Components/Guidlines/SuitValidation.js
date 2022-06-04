import React from 'react';
import Guidlines from './Guidlines';
import '../../App.css'

const SuitValidation = () => {
//     const title = "Suit Valuation";
//     const discription = `
//          আদালতের এখতিয়ার এবং প্রদেয় কোর্ট ফির পরিমান নির্ধারনের উদ্দেশ্যে দেওয়ানী মামলার মূল্য বা প্রার্থিত প্রতিকারের বা মামলার বিষয়বস্তুর মূল্য দেখাতে হয় । একে মামলার মূল্যমান (valuation of the suit) বলে । মামলার সঠিক মূল্য নির্ধারন করা হয়েছে কিনা এবং সঠিক কোর্ট ফি দেয়া হয়েছে কিনা  তা দেখার দায়িত্ব আদালতের ।
// কোনো মামলার মূল্যমান এবং প্রদেয় মূল্যানুপাতিক কোর্ট ফির হার কিভাবে নির্ধারিত হবে তা Court Fees Act, ১৮৭০ এর ৭ ধারার বিভিন্ন উপ-ধারায় বর্নিত আছে :-
// ১. ৭ ধারার (১) ও (২) উপধারা অনুযায়ী টাকার মামলায় দাবীকৃত টাকাই হলো মামলার মূল্যমান ।
// ২. ৭ ধারার (৩) উপধারা অনুযায়ী টাকা ব্যতীত অস্হাবর মামলা যার বিষয়বস্তুর বাজার মূল্য আছে সেই বাজার মূল্য অনুসারে মামলার মূল্য নির্ধারিত হবে ।
// ৩. ৭ ধারার (৪) উপধারার ক্লজ (সি), (ডি), (ই) এবং (এফ) অনুযায়ী আনুসঙ্গিক প্রতিকার (consequential relief) সহ ঘোষনামূলক মামলা, নিষেধাÁvর মামলা, জমি সংক্রান্ত বর্তসত্বের মামলা এবং হিসাব সংক্রান্ত মামলায় আরজিতে উল্লেখিত প্রতিকারের মূল্য অনুসারে মামলার মূল্য নির্ধারিত হবে । তবে এই সব মামলার এমন মূল্য নির্ধারন করা যাবেনা যার advalorem court fee ৩০০/- র নিচে হয় ।
// ৪. ৭ ধারার (৫) উপধারা অনুযায়ী জমি/বাড়ীর দখল সংক্রান্ত মামলায় জমি বা বাড়ীর বাজার মূল্য বা মামলা দায়ের করার আগের ১৫ বছরে এই জমি হতে আয় এর ১৫ গুন ধরে মামলার মূল্যমান নির্ধারিত হবে ।
// ৫. ৭ ধারার (৬) উপধারা অনুযায়ী অগ্রক্রয়ের অধিকার প্রতিষ্ঠার মামলায় নালিশী জমি/ বাড়ীর মূল্য অনুসারে মামলার মূল্য নির্ধারিত হবে ।
// ৬. ৭ ধারার (৬এ) উপধারা অনুযায়ী সত্ব ঘোষনা সহ এজমালী সম্পত্তি বণ্টন এবং খাস দখল পাওয়ার মামলায় বাদীর অংশের বাজার মূল্য অনুসারে মামলার মূল্য নির্ধারিত হবে ।
// ৭. ৭ ধারার (৮) উপধারা অনুযায়ী ডিক্রি রদের মামলায় তর্কিত ডিক্রি নির্ধারিত মূল্যমানের হয়ে থাকলে সেই মূল্যই হবে মামলার মূল্য । আর তর্কিত ডিক্রি নির্ধারিত মূল্যমানের না হয়ে থাকলে আগের মামলায় যে কোর্ট ফি দেয়া হয়েছে এই মামলাতেও সেই একই কোর্ট ফি প্রদেয় ।
// ৮. ৭ ধারার (৯) উপধারা অনুযায়ী বন্ধকী সম্পত্তি বন্ধক মুক্ত করা (redemption of mortgage) এবং বন্ধকী সম্পত্তি বন্ধক খালাসের অধিকার হরণের (foreclosure of mortgage) মামলায় বন্ধকী দলিলে উল্লেখিত কর্জের টাকা অনুসারে মামলার মূল্য নির্ধারিত হবে ।
// ৯. ৭ ধারার (১০) উপধারা অনুযায়ী চুক্তি প্রবলের মামলায় চুক্তিকৃত পণ অনুসারে মামলার মূল্য নির্ধারিত হবে ।
// ১০.  ৭ ধারার (১১) উপধারা অনুযায়ী ভাড়াটিয়া উচ্ছেদের মামলায় মামলা দায়ের করার আগের ১ বছরের ভাড়ার সমান মামলার মূল্য নির্ধারিত হবে ।
// Court Fees Act, ১৮৭০ এর ৮গ ধারা অনুযায়ী আদালত যদি মনে করে যে আরজিতে মামলার যে মূল্যমান দেয়া হয়েছে তা সঠিক নয় তাহলে আদালত সঠিক মূল্যমান নির্ণয় করতে এবং মূল্যমান পরিবর্তন করতে পারবেন ।

//     `;

    return (
      <div className='container pt-5'>
        {/* <Guidlines title={title} discription={discription}></Guidlines> */}
        <div className='mt-5'>
          <h2 className='text-center text-white py-5'>Suit Valuation / মামলার মূল্যমান</h2>
          <div className='pe-2 text-white'>
            <p className='py-2 '>
              আদালতের এখতিয়ার এবং প্রদেয় কোর্ট ফির পরিমান নির্ধারনের উদ্দেশ্যে
              দেওয়ানী মামলার মূল্য বা প্রার্থিত প্রতিকারের বা মামলার বিষয়বস্তুর
              মূল্য দেখাতে হয় । একে মামলার মূল্যমান (valuation of the suit) বলে
              । মামলার সঠিক মূল্য নির্ধারন করা হয়েছে কিনা এবং সঠিক কোর্ট ফি দেয়া
              হয়েছে কিনা তা দেখার দায়িত্ব আদালতের ।
            </p>
            <p className='py-2 pb-2'>
              কোনো মামলার মূল্যমান এবং প্রদেয় মূল্যানুপাতিক কোর্ট ফির হার কিভাবে
              নির্ধারিত হবে তা Court Fees Act, ১৮৭০ এর ৭ ধারার বিভিন্ন উপ-ধারায়
              বর্নিত আছে :-
            </p>
            <br />
            <p className='fw-bold'>
              ১. ৭ ধারার (১) ও (২) উপধারা অনুযায়ী টাকার মামলায় দাবীকৃত টাকাই হলো
              মামলার মূল্যমান । <br /><br />
              ২. ৭ ধারার (৩) উপধারা অনুযায়ী টাকা ব্যতীত অস্হাবর মামলা যার
              বিষয়বস্তুর বাজার মূল্য আছে সেই বাজার মূল্য অনুসারে মামলার মূল্য
              নির্ধারিত হবে ।<br /><br />
              ৩. ৭ ধারার (৪) উপধারার ক্লজ (সি), (ডি), (ই) এবং (এফ) অনুযায়ী
              আনুসঙ্গিক প্রতিকার (consequential relief) সহ ঘোষনামূলক মামলা,
              নিষেধাÁvর মামলা, জমি সংক্রান্ত বর্তসত্বের মামলা এবং হিসাব
              সংক্রান্ত মামলায় আরজিতে উল্লেখিত প্রতিকারের মূল্য অনুসারে মামলার
              মূল্য নির্ধারিত হবে । তবে এই সব মামলার এমন মূল্য নির্ধারন করা
              যাবেনা যার advalorem court fee ৩০০/- র নিচে হয় ।<br /><br />
              ৪. ৭ ধারার (৫) উপধারা অনুযায়ী জমি/বাড়ীর দখল সংক্রান্ত মামলায় জমি
              বা বাড়ীর বাজার মূল্য বা মামলা দায়ের করার আগের ১৫ বছরে এই জমি হতে
              আয় এর ১৫ গুন ধরে মামলার মূল্যমান নির্ধারিত হবে ।<br /><br />
              ৫. ৭ ধারার (৬) উপধারা অনুযায়ী অগ্রক্রয়ের অধিকার প্রতিষ্ঠার মামলায়
              নালিশী জমি/ বাড়ীর মূল্য অনুসারে মামলার মূল্য নির্ধারিত হবে ।<br /><br />
              ৬. ৭ ধারার (৬এ) উপধারা অনুযায়ী সত্ব ঘোষনা সহ এজমালী সম্পত্তি বণ্টন
              এবং খাস দখল পাওয়ার মামলায় বাদীর অংশের বাজার মূল্য অনুসারে মামলার
              মূল্য নির্ধারিত হবে ।<br /><br />
              ৭. ৭ ধারার (৮) উপধারা অনুযায়ী ডিক্রি রদের মামলায় তর্কিত ডিক্রি
              নির্ধারিত মূল্যমানের হয়ে থাকলে সেই মূল্যই হবে মামলার মূল্য । আর
              তর্কিত ডিক্রি নির্ধারিত মূল্যমানের না হয়ে থাকলে আগের মামলায় যে
              কোর্ট ফি দেয়া হয়েছে এই মামলাতেও সেই একই কোর্ট ফি প্রদেয় ।<br /><br />
              ৮. ৭ ধারার (৯) উপধারা অনুযায়ী বন্ধকী সম্পত্তি বন্ধক মুক্ত করা
              (redemption of mortgage) এবং বন্ধকী সম্পত্তি বন্ধক খালাসের অধিকার
              হরণের (foreclosure of mortgage) মামলায় বন্ধকী দলিলে উল্লেখিত
              কর্জের টাকা অনুসারে মামলার মূল্য নির্ধারিত হবে ।<br /><br />
              ৯. ৭ ধারার (১০) উপধারা অনুযায়ী চুক্তি প্রবলের মামলায় চুক্তিকৃত পণ
              অনুসারে মামলার মূল্য নির্ধারিত হবে ।<br /><br />
              ১০. ৭ ধারার (১১) উপধারা অনুযায়ী ভাড়াটিয়া উচ্ছেদের মামলায় মামলা
              দায়ের করার আগের ১ বছরের ভাড়ার সমান মামলার মূল্য নির্ধারিত হবে ।
              <br /><br />
              Court Fees Act, ১৮৭০ এর ৮গ ধারা অনুযায়ী আদালত যদি মনে করে যে
              আরজিতে মামলার যে মূল্যমান দেয়া হয়েছে তা সঠিক নয় তাহলে আদালত সঠিক
              মূল্যমান নির্ণয় করতে এবং মূল্যমান পরিবর্তন করতে পারবেন ।<br /><br />
            </p>
          </div>
        </div>
      </div>
    );
};

export default SuitValidation;