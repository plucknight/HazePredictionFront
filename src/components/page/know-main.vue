<template>
  <div class="main">
    <div class="area wrapper_02">
      <el-tabs
        v-model="activeName"
        class="demo-tabs"
        @tab-click="handleClick"
        style="width: 1160px"
      >
        <el-tab-pane label="空气质量指数标准" name="first">
          <div>
            <table>
              <tr>
                <th>空气质量指数</th>
                <th>空气质量状况</th>
                <th>对健康影响情况</th>
                <th>建议采取的措施</th>
              </tr>
              <tr>
                <td>0-50</td>
                <td>优</td>
                <td>空气质量令人满意，基本无空气污染，对健康没有危害。</td>
                <td>各类人群可多参加户外活动，多呼吸一下清新的空气。</td>
              </tr>
              <tr>
                <td>51-100</td>
                <td>良</td>
                <td>
                  除少数对某些污染物特别敏感的人群外，不会对人体健康产生危害。
                </td>
                <td>
                  除少数对某些污染物特别容易过敏的人群外，其他人群可以正常进行室外活动。
                </td>
              </tr>
              <tr>
                <td>101-150</td>
                <td>轻度</td>
                <td>敏感人群症状会有轻度加剧，对健康人群没有明显影响。</td>
                <td>
                  儿童、老年人及心脏病、呼吸系统疾病患者应尽量减少体力消耗大的户外活动。
                </td>
              </tr>
              <tr>
                <td>151-200</td>
                <td>中度</td>
                <td>
                  敏感人群症状进一步加剧，可能对健康人群的心脏、呼吸系统有影响。
                </td>
                <td>
                  儿童、老年人及心脏病、呼吸系统疾病患者应尽量减少外出，停留在室内，一般人群应适量减少户外运动。
                </td>
              </tr>
              <tr>
                <td>201-300</td>
                <td>重度</td>
                <td>空气状况很差，会对每个人的健康都产生比较严重的危害。</td>
                <td>
                  儿童、老年人及心脏病、肺病患者应停留在室内，停止户外运动，一般人群尽量减少户外运动。
                </td>
              </tr>
              <tr>
                <td>>300</td>
                <td>严重</td>
                <td>空气状况极差，所有人的健康都会受到严重危害。</td>
                <td>
                  儿童、老年人和病人应停留在室内，避免体力消耗，除有特殊需要的人群外，一般人群尽量不要停留在室外。
                </td>
              </tr>
            </table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="空气质量指数级别" name="second">
          <ul class="food-list">
            <li class="food-item">
              <p class="food-description">
                <el-tag effect="dark">一级</el-tag>

                &nbsp;优；空气质量指数0-50；空气质量令人满意，基本无空气污染；各类人群可正常活动。
              </p>
            </li>
            <li class="food-item">
              <p class="food-description">
                <el-tag class="ml-2" type="success" effect="dark">二级</el-tag>

                &nbsp;良；空气质量指数51-100；空气质量可接受，但某些污染物可能对极少数异常敏感人群健康有较弱影响；此类人群应减少户外活动。
              </p>
            </li>
            <li class="food-item">
              <p class="food-description">
                <el-tag class="ml-2" type="info" effect="dark">三级</el-tag>
                &nbsp;轻度污染；空气质量指数101-150；易感人群症状有轻度加剧，健康人群出现刺激症状；儿童、老年人及心脏病、呼吸系统疾病患者应减少长时间、高强度的户外锻炼。
              </p>
            </li>
            <li class="food-item">
              <p class="food-description">
                <el-tag class="ml-2" type="warning" effect="dark">四级</el-tag>
                &nbsp;中度污染；空气质量指数151-200；进一步加剧易感人群症状，可能对健康人群心脏、呼吸系统有影响；儿童、老年人及心脏病、呼吸系统疾病患者避免长时间、高强度的户外锻炼，一般人群适量减少户外运动。
              </p>
            </li>
            <li class="food-item">
              <p class="food-description">
                <el-tag class="ml-2" type="danger" effect="dark">五级</el-tag
                >&nbsp;重度污染；空气质量指数201-300；心脏病和肺病患者症状显著加剧，运动耐受力降低，健康人群普遍出现症状；儿童、老年人和心脏病、肺病患者应停留在室内，停止户外运动，一般人群减少户外运动。
              </p>
            </li>
            <li class="food-item">
              <p class="food-description">
                <el-tag class="ml-2" type="danger" color="#842c34">六级</el-tag
                >&nbsp;严重污染；空气质量指数>300；健康人群运动耐受力降低，有明显强烈症状，提前出现某些疾病；儿童、老年人和病人应当停留在室内，避免体力消耗，一般人群应避免户外活动。
              </p>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="关于空气各种指数" name="third">
          <ul class="food-list">
            <li class="food-item">
              <h2 class="food-title">
                环境健康指数（ENVIRONMENT HEALTH INDEX，简称EHI）
              </h2>
              <p class="food-description">
                是用来量化定义环境与人体健康或人体感受的一个量化指数，为无量纲指数，数值为0~100，数值越大表示环境越好或人体感受越舒适。
              </p>
            </li>
            <li class="food-item">
              <h2 class="food-title">
                空气质量指数（AIR QUALITY INDEX，简称AQI）
              </h2>
              <p class="food-description">
                定量描述空气质量状况的指数，分为五级，相对应空气质量的六个类别，其数值越大
                说明空气污染状况越严重，对人体健康的危害也就越大。参与空气质量评价的主要污染物为细颗粒物（PM2.5）、可吸入颗粒物（PM10）、二氧化硫（SO2）、二氧化氮
                （NO2）、臭氧（O3）、一氧化碳（CO）等六项。
              </p>
            </li>
          </ul>
        </el-tab-pane>

        <el-tab-pane label="雾霾等级划分" name="fourth">
          <div class="textbox">
            <div class="title">雾霾污染等级划分：</div>
            <div class="section">
              <div class="section-title">一级（极重污染）：</div>
              <div class="section-content">
                即区域连续24小时空气质量指数在500以上。
              </div>
            </div>

            <div class="section">
              <div class="section-title">二级（严重污染）：</div>
              <div class="section-content">
                即区域连续48小时空气质量指数在301至500（含500）范围。
              </div>
            </div>

            <div class="section">
              <div class="section-title">三级（重度污染）：</div>
              <div class="section-content">
                即区域连续72小时空气质量指数在201至300（含300）范围。
              </div>
            </div>

            <div class="title">雾霾预警等级划分：</div>

            <div class="section">
              <div class="section-title">黄色预警：</div>
              <div class="section-content">对应预报等级用语的中度霾。</div>
            </div>

            <div class="section">
              <div class="section-title">橙色预警：</div>
              <div class="section-content">对应预报等级用语的重度霾。</div>
            </div>

            <div class="section">
              <div class="section-title">红色预警：</div>
              <div class="section-content">对应预报等级用语的严重霾。</div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="雾霾天气防护" name="fifth">
          <div class="textbox">
            <div class="section">
              <div class="section-title">1. 外出戴口罩：</div>
              <div class="section-content">
                雾霾天应尽量减少外出，如果需要外出，应戴上 N95、N99
                等专门防雾霾的口罩。
              </div>
            </div>

            <div class="section">
              <div class="section-title">2. 不做户外运动，减少运动量：</div>
              <div class="section-content">
                在雾霾天气下，应选择室内运动并适当减少运动量，避免高强度运动带来的不适。
              </div>
            </div>

            <div class="section">
              <div class="section-title">3. 尽量不要开窗：</div>
              <div class="section-content">
                雾霾天空气质量差，开窗会让室内空气变差，可以使用空气净化器和加湿器改善室内空气。
              </div>
            </div>

            <div class="section">
              <div class="section-title">4. 做好个人卫生：</div>
              <div class="section-content">
                外出回来要及时洗脸、漱口、清理鼻腔，长时间户外活动的人群应进行全身清洗。
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="关于雾霾的知识" name="sixth">
          <div class="textbox2">
            <p>
              雾霾是一种气象学现象，是指大量细微的干尘粒等均匀地悬浮在空中，使水平能见度小于10公里、空气普遍混浊的现象。
            </p>
            <p>
              霾的组成成分非常复杂，大部分有害物质都富集在细颗粒物（PM2.5）上。目前所知的主要成分为硫酸盐、硝酸盐、铵盐、含碳颗粒、重金属等。
            </p>
            <p>所以，用指标评价雾霾，其实就是评价这些细颗粒污染物的浓度。</p>
            <p>
              气象学上用空气质量指数（AQI）表示，将常规监测的几种空气污染物浓度简化成为单一的概念性指数值形式，并分级表征空气污染程度和空气质量状况。
            </p>
            <p>
              中国计入空气污染指数的项目暂定为：二氧化硫、氮氧化物和总悬浮颗粒物。
            </p>
            <p>AQI指数数值越大，指示当天空气污染越严重，雾霾出现。</p>
            <p>
              雾霾和霾是两个不同的概念，它们在气象学和环境污染方面有所区别。
            </p>
            <p>
              雾霾（Fog
              andHaze）：雾霾是指大气中同时存在雾和霾的情况。它是由水蒸气凝结形成的雾和悬浮在空气中的颗粒物（如烟尘、灰尘等）组成的霾同时存在于空气中的现象。雾霾天气通常具有低能见度和空气质量下降的特点。
            </p>
            <p>
              霾（Haze）：霾是一种大气污染现象，指空气中悬浮颗粒物（如烟尘、颗粒物、灰尘等）或化学物质（如二氧化硫、氮氧化物等）导致空气浑浊的状态。霾主要由污染物排放和气象条件形成，常见于工业密集地区或大气污染严重的地区，造成能见度下降和空气质量恶化。
            </p>
            <p>
              简单来说，雾霾是雾和霾同时存在的天气现象，而霾则是指空气中悬浮颗粒物造成的空气污染现象。
            </p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="防预雾霾的食物" name="seventh">
          <ul class="food-list">
            <li class="food-item">
              <h2 class="food-title">萝卜</h2>
              <p class="food-description">肺脏的排毒食品。</p>
              <p class="food-description">
                <strong>清肺原理：</strong
                >在中医眼中，大肠和肺的关系最密切，肺排出毒素程度取决于大肠是否通畅，萝卜能帮助大肠排泄宿便，生吃或拌成凉菜都可以。
              </p>
            </li>
            <li class="food-item">
              <h2 class="food-title">百合</h2>
              <p class="food-description">提高肺脏抗毒能力。</p>
              <p class="food-description">
                <strong>清肺原理：</strong
                >肺脏向来不喜欢燥气，在燥的情况下，容易导致积累毒素。蘑菇、百合有很好的养肺滋阴的功效，可以帮肺脏抗击毒素，食用时加工时间不要过长，否则百合中的汁液会减少，防毒效果要大打折扣。
              </p>
            </li>
            <li class="food-item">
              <h2 class="food-title">白萝卜</h2>
              <p class="food-description">
                根茎类蔬菜，十字花科萝卜属植物。含葡萄糖、蔗糖、果糖、维生素C、莱菔甙等。
              </p>
              <p class="food-description">
                <strong>清肺原理：</strong
                >白萝卜中的芥子油、淀粉酶和粗纤维，具有促进消化，增强食欲和止咳化痰的作用。中医理论认为其性凉，入肺胃经。
              </p>
            </li>
            <li class="food-item">
              <h2 class="food-title">莲藕</h2>
              <p class="food-description">
                莲肥大的地下茎，微甜而脆，可生食也可 做菜。
              </p>
              <p class="food-description">
                <strong>清肺原理：</strong
                >熟莲藕性味甘、温、无毒，可以补心生血，健胃开脾，滋养强壮，莲藕汤利小便，清热润肺。
              </p>
            </li>
            <li class="food-item">
              <h2 class="food-title">雪梨</h2>
              <p class="food-description">
                常见水果，因肉嫩白如雪，故得名。含苹果酸、柠檬酸、维生素B1、B2、维生素C、胡萝卜素等微量元素。
              </p>
              <p class="food-description">
                <strong>清肺原理：</strong
                >白色入肺，故白色食物都对肺有保养功效。雪梨水分大，性略寒，可以生津润燥、清热化痰。
              </p>
            </li>
            <li class="food-item">
              <h2 class="food-title">黑木耳</h2>
              <p class="food-description">
                富含的植物胶原成分，具有较强的吸附作用。
              </p>
              <p class="food-description">
                <strong>清肺原理：</strong
                >可将因呼吸进入到人体内的灰尘、杂质、垃圾等污染物集中吸附并排出体外，从而达到净涤肠胃、养肺气清肺管的目的；植物胶原还可以帮助消化纤维类物质，对无意中吃下的难以消化的头发、谷壳、木渣、沙子、金属屑等异物有溶解与氧化作用。
              </p>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="常见雾霾易引发的疾病" name="eighth">
          <div class="list-container">
            <ul class="harm-list">
              <li class="harm-item">
                <h2 class="harm-title">哮喘</h2>
                <p class="harm-description">
                  雾天风力小，空气流动满，注意防护以免哮喘发作。
                </p>
              </li>
              <li class="harm-item">
                <h2 class="harm-title">支气管炎</h2>
                <p class="harm-description">
                  多见寒冷天气的雾霾天，后者气候骤变的雾霾天。
                </p>
              </li>
              <li class="harm-item">
                <h2 class="harm-title">脑出血</h2>
                <p class="harm-description">
                  雾天气压低，空气中含氧量下降，容易缺氧胸闷。
                </p>
              </li>
              <li class="harm-item">
                <h2 class="harm-title">高血压</h2>
                <p class="harm-description">
                  雾被吸入后会增加人体耗氧量，影响血管收缩功能。
                </p>
              </li>
              <li class="harm-item">
                <h2 class="harm-title">结膜炎</h2>
                <p class="harm-description">
                  空气污染、烟雾、刺激性气体会刺激结膜引发结膜炎。
                </p>
              </li>
              <li class="harm-item">
                <h2 class="harm-title">咽炎</h2>
                <p class="harm-description">空气污染、烟雾、刺激</p>
                <p class="harm-description">
                  空气污染、烟雾、刺激性气体吸入会刺激咽喉引发咽炎。
                </p>
              </li>
            </ul>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const activeName = ref("first");
</script>

<style scoped></style>
