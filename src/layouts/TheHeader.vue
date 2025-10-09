<template>
	<header>
		<nav class="navbar navbar-expand-sm navbar-dark bg-primary">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">
					<img src="@/assets/logo.svg" width="30" height="30" />
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto">
						<li class="nav-item">
							<RouterLink to="/" class="nav-link" active-class="active">
								Home
							</RouterLink>
						</li>
						<li class="nav-item">
							<RouterLink to="/about" class="nav-link" active-class="active">
								About
							</RouterLink>
						</li>
						<li>
							<RouterLink to="/nested" class="nav-link" active-class="active">
								Nested
							</RouterLink>
						</li>
					</ul>
					<form class="d-flex">
						<input
							class="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button class="btn btn-light" type="submit">Search</button>
					</form>
				</div>
			</div>
		</nav>
	</header>
</template>
