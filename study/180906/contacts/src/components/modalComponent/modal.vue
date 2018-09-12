<template>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{popupType}} </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <slot name="add"></slot>
                    <slot name="update"></slot>
                    <slot name="updatePhoto"></slot>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="submit">{{popupType}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "modalComponent",
  props: ["popupType"],

  methods: {
    submit() {
      switch (this.popupType) {
        case "add":
          this.$emit("addContact");
          break;

        case "update":
          this.$emit("updateContact");
          break;

        case "updatePhoto":
          this.$emit("updatePhoto");
          break;

        default:
          break;
      }
    }
  }
};
</script>