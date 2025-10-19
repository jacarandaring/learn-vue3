<template>
	<div class="card">
		<div v-if="$slot.header" class="card-header">
			<slot name="header"></slot>
		</div>
		<div v-if="$slot.default" class="card-body">
			<slot></slot>
		</div>
		<div v-if="$slot.footer" class="card-footer">
			<slot name="footer"></slot>
		</div>
	</div>
</template>
