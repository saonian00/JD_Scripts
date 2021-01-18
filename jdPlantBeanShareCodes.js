/*
京东种豆得豆互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写东东萌宠的好友码。
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let PlantBeanShareCodes = [
  'olmijoxgmjutys2itim2hqqmvyz74ngmmrkujti@4npkonnsy7xi2ux3mf565ej2kpwac5si6ys6mli@okj5ibnh3onz7lkabvk73v2ncpdkltficveixoi@4npkonnsy7xi3cbwrkdranb34ope6isjxoiufwq@3vlqzp6c7dz4dou4s6vzfekwwi5ac3f4ijdgqji@l4ex6vx6yynova3gvsl5klodxv5q2bwngt6hwiy@f5pavyxxlph5obbi2b7ajniwwcrctdwlyrw7vrq@uwgpfl3hsfqp3s47utmsyizlelviqa6evpb3h7y@66j4yt3ebl5ierjljoszp7e4izzbzaqhi5k2unz2afwlyqsgnasq@olmijoxgmjutyrsovl2xalt2tbtfmg6sqldcb3q@e7lhibzb3zek27amgsvywffxx7hxgtzstrk2lba@olmijoxgmjutyx55upqaqxrblt7f3h26dgj2riy',//账号一的好友shareCode,不同好友中间用@符号隔开
  'olmijoxgmjutys2itim2hqqmvyz74ngmmrkujti@4npkonnsy7xi2ux3mf565ej2kpwac5si6ys6mli@okj5ibnh3onz7lkabvk73v2ncpdkltficveixoi@4npkonnsy7xi3cbwrkdranb34ope6isjxoiufwq@3vlqzp6c7dz4dou4s6vzfekwwi5ac3f4ijdgqji@l4ex6vx6yynova3gvsl5klodxv5q2bwngt6hwiy@f5pavyxxlph5obbi2b7ajniwwcrctdwlyrw7vrq@uwgpfl3hsfqp3s47utmsyizlelviqa6evpb3h7y@66j4yt3ebl5ierjljoszp7e4izzbzaqhi5k2unz2afwlyqsgnasq@olmijoxgmjutyrsovl2xalt2tbtfmg6sqldcb3q@e7lhibzb3zek27amgsvywffxx7hxgtzstrk2lba@olmijoxgmjutyx55upqaqxrblt7f3h26dgj2riy',//账号一的好友shareCode,不同好友中间用@符号隔开
  'olmijoxgmjutys2itim2hqqmvyz74ngmmrkujti@4npkonnsy7xi2ux3mf565ej2kpwac5si6ys6mli@okj5ibnh3onz7lkabvk73v2ncpdkltficveixoi@4npkonnsy7xi3cbwrkdranb34ope6isjxoiufwq@3vlqzp6c7dz4dou4s6vzfekwwi5ac3f4ijdgqji@l4ex6vx6yynova3gvsl5klodxv5q2bwngt6hwiy@f5pavyxxlph5obbi2b7ajniwwcrctdwlyrw7vrq@uwgpfl3hsfqp3s47utmsyizlelviqa6evpb3h7y@66j4yt3ebl5ierjljoszp7e4izzbzaqhi5k2unz2afwlyqsgnasq@olmijoxgmjutyrsovl2xalt2tbtfmg6sqldcb3q@e7lhibzb3zek27amgsvywffxx7hxgtzstrk2lba@olmijoxgmjutyx55upqaqxrblt7f3h26dgj2riy',//账号一的好友shareCode,不同好友中间用@符号隔开
  'olmijoxgmjutys2itim2hqqmvyz74ngmmrkujti@4npkonnsy7xi2ux3mf565ej2kpwac5si6ys6mli@okj5ibnh3onz7lkabvk73v2ncpdkltficveixoi@4npkonnsy7xi3cbwrkdranb34ope6isjxoiufwq@3vlqzp6c7dz4dou4s6vzfekwwi5ac3f4ijdgqji@l4ex6vx6yynova3gvsl5klodxv5q2bwngt6hwiy@f5pavyxxlph5obbi2b7ajniwwcrctdwlyrw7vrq@uwgpfl3hsfqp3s47utmsyizlelviqa6evpb3h7y@66j4yt3ebl5ierjljoszp7e4izzbzaqhi5k2unz2afwlyqsgnasq@olmijoxgmjutyrsovl2xalt2tbtfmg6sqldcb3q@e7lhibzb3zek27amgsvywffxx7hxgtzstrk2lba@olmijoxgmjutyx55upqaqxrblt7f3h26dgj2riy',//账号一的好友shareCode,不同好友中间用@符号隔开
  'olmijoxgmjutys2itim2hqqmvyz74ngmmrkujti@4npkonnsy7xi2ux3mf565ej2kpwac5si6ys6mli@okj5ibnh3onz7lkabvk73v2ncpdkltficveixoi@4npkonnsy7xi3cbwrkdranb34ope6isjxoiufwq@3vlqzp6c7dz4dou4s6vzfekwwi5ac3f4ijdgqji@l4ex6vx6yynova3gvsl5klodxv5q2bwngt6hwiy@f5pavyxxlph5obbi2b7ajniwwcrctdwlyrw7vrq@uwgpfl3hsfqp3s47utmsyizlelviqa6evpb3h7y@66j4yt3ebl5ierjljoszp7e4izzbzaqhi5k2unz2afwlyqsgnasq@olmijoxgmjutyrsovl2xalt2tbtfmg6sqldcb3q@e7lhibzb3zek27amgsvywffxx7hxgtzstrk2lba@olmijoxgmjutyx55upqaqxrblt7f3h26dgj2riy',//账号一的好友shareCode,不同好友中间用@符号隔开
]
// 判断github action里面是否有种豆得豆互助码
if (process.env.PLANT_BEAN_SHARECODES) {
  if (process.env.PLANT_BEAN_SHARECODES.indexOf('&') > -1) {
    console.log(`您的种豆互助码选择的是用&隔开\n`)
    PlantBeanShareCodes = process.env.PLANT_BEAN_SHARECODES.split('&');
  } else if (process.env.PLANT_BEAN_SHARECODES.indexOf('\n') > -1) {
    console.log(`您的种豆互助码选择的是用换行隔开\n`)
    PlantBeanShareCodes = process.env.PLANT_BEAN_SHARECODES.split('\n');
  } else {
    PlantBeanShareCodes = process.env.PLANT_BEAN_SHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < PlantBeanShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['PlantBeanShareCodes' + index] = PlantBeanShareCodes[i];
}
