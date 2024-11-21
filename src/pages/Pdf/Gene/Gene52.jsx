import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene52 = () => {
    return (
        <PageWrapper>
            <Text
                sidebar={1}
                textContent={"炎症/抗炎症"}
            />

            <GeneInformationMiddle
                geneName={"BDKRB2"}
                datas={["rs1799722"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、炎症応答や血管拡張の調整に影響を与える可能性があります。BDKRB2（Bradykinin Receptor B2）は、ブラジキニンB2受容体をコードしています。この受容体は、血管拡張や炎症、痛みの感知に関わるペプチドホルモンであるブラジキニンと結合し、血圧調節や炎症反応の制御に寄与します。"
                }
            />
            <GeneInformationMiddle
                geneName={"GPX1"}
                datas={[
                    "rs3448",
                    "rs1050450",
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、細胞内の過酸化物の除去能力が弱まる可能性があります。\nGPX1（Glutathione Peroxidase 1）は、抗酸化酵素であるグルタチオンペルオキシダーゼ1をコードしており、細胞内の過酸化水素や有機過酸化物をグルタチオンを用いて水やアルコールに還元する役割を果たします。"
                }
            />
            <GeneInformationMiddle
                geneName={"GPX2"}
                datas={["rs2071566", "rs4902346"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、酸化ストレスへの防御機能が減少し、腸の健康や免疫機能に影響を与える可能性があります。GPX2（Glutathione Peroxidase 2）は、腸管に多く発現するグルタチオンペルオキシダーゼ2という抗酸化酵素をコードしています。この酵素は、腸内で発生する過酸化物を還元して、酸化ストレスを軽減し、腸の上皮細胞を保護します。"
                }
            />
            <GeneInformationMiddle
                geneName={"GPX3"}
                datas={["rs3828599", "rs8177412"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、全身の抗酸化防御が弱まる可能性があります。\nGPX3（Glutathione Peroxidase 3）は、グルタチオンペルオキシダーゼ3という抗酸化酵素をコードしています。GPX3は血漿中に存在し、過酸化水素や有機過酸化物を還元して無毒化することで、体全体の酸化ストレスを軽減します。"
                }
            />

            <GenePageNumber>93</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene52;