<template>
  <div>
    <v-container grid-list-xs>
      <v-card>
        <v-card-text class="text-h3"> {{ guide.attributes.title }}</v-card-text>
        <v-card-text class="text-h6">
          by @{{ guide.attributes.author.data.attributes.username }} - on
          {{ guide.attributes.createdAt.split("T")[0] }}
        </v-card-text>
        <ContentViewer
          v-for="(content, index) in content.attributes.content"
          :key="content.id + '' + index"
          :content="content"
        />
      </v-card>
    </v-container>
  </div>
</template>
<script>
import Api from "../../services/api";
export default {
  name: "guidesIdPage",
  async asyncData({ params }) {
    const guide = (await Api.getGuide(params.id)).data;
    const content = (await Api.getGuideContent(params.id)).data;
    return { guide, content };
  },
};
</script>
<style></style>
